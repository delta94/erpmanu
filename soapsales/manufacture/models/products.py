from __future__ import unicode_literals
from django.db import models
from django.utils import timezone
from simple_history.models import HistoricalRecords
from datetime import datetime
# from inventory.models import WareHouse, WareHouseItem
from basedata.const import MANUFACTURING_PRODUCT_TYPES, PROCESSED_PRODUCTS_STOCK_STATUS_CHOICES
from .stock import ManufacturedStockItem




class ProcessProduct(models.Model):
    

    name = models.CharField(max_length=255)
    description = models.TextField()
    type = models.PositiveSmallIntegerField(choices=MANUFACTURING_PRODUCT_TYPES)# main product, byproduct, waste,  wip
    unit = models.ForeignKey('basedata.UnitOfMeasure', on_delete=models.SET_NULL, null=True)
    created_on = models.DateTimeField(auto_now_add=True, editable=False, db_index=True, verbose_name=('created on'))
    finished_goods= models.BooleanField(default=False)
    reference_number = models.CharField(max_length=255, null=True, default=None)
    location = models.ForeignKey(
                        'inventory.WareHouse', 
                        blank=True, 
                        null=True, 
                        on_delete=models.SET_NULL
                    )
    status = models.PositiveIntegerField(
                            default=0,
                            choices=PROCESSED_PRODUCTS_STOCK_STATUS_CHOICES,
                        )
    minimum_order_level = models.IntegerField( default=0, null=True, blank=True)
    maximum_stock_level = models.IntegerField(default=0, null=True, blank=True)

    returned = models.BooleanField(default=False)
    unit_price = models.DecimalField(max_digits=16, 
        decimal_places=2, 
        default=0.0)

    # value is calculated once when the invoice is generated to prevent
    # distortions as prices change
    #what it is worth to the business



    history = HistoricalRecords()


    @property
    def line(self):
        from invoicing.models import InvoiceLine
        '''The invoice line the component belongs to'''
        if InvoiceLine.objects.filter(product=self).exists():
            return InvoiceLine.objects.get(product=self)
        return None

    @property
    def returned_quantity(self):
        '''The returns effected by credit notes for this particular invoice
        line'''
        if self.line:
            return sum([ item.quantity for item in CreditNoteLine.objects.filter(line=self.line)])
        return 0



    @property
    def quantity(self):
        from inventory.models import WareHouseItem

        #returns quantity from all warehouses
        processed = ManufacturedStockItem.objects.filter(processed_item=self)
        return sum([i.quantity for i in processed])


    @property
    def unit_sales_price(self):
    	return self.unit_price


    def production_orders(self):
        return self.production_orders.all()





    def save(self, *args, **kwargs):
        if self.value == D(0.0):
            self.set_value()
        if not self.reference_number:
           prefix = 'PPD-{}'.format(timezone.now().strftime('%y%m%d'))
           prev_instances = self.__class__.objects.filter(reference_number__contains=prefix)
           if prev_instances.exists():
              last_instance_id = prev_instances.last().reference_number[-4:]
              self.reference_number = prefix+'{0:04d}'.format(int(last_instance_id)+1)
           else:
               self.reference_number = prefix+'{0:04d}'.format(1)
        super(ProcessProduct, self).save(*args, **kwargs)


    def __str__(self):
        return f'{self.name} {self.reference_number}'


