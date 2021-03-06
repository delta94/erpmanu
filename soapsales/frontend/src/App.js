import React, {Component, Fragment} from 'react';
import {Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './App.css';
import Home from './components/Home/Home';
import Default from './components/Home/Default';
import Content from "./dashboard/Content";
import Dashboard from './dashboard/components/Dashboard';

//accounts
import AccountingConfigurationForm from './accounts/accountingconfiguration/AccountingConfigurationForm';

import Taxes from './accounts/taxes/Taxes';

import Journals from './accounts/journals/Journals';

import Assets from './accounts/assets/Assets';

import Currencies from './accounts/currencies/Currencies';

import Accounts from './accounts/accounts/Accounts';

import InterestBearingAccounts from './accounts/interestbearingaccounts/InterestBearingAccounts';

import BillPayments from './accounts/billpayments/BillPayments';

import Ledgers from './accounts/ledgers/Ledgers';

import AccountingPosts from './accounts/accountingposts/AccountingPosts';

import Workbooks from './accounts/workbooks/Workbooks';

import AccountingAdjustments from './accounts/accountingadjustments/AccountingAdjustments';

import Debits from './accounts/debits/Debits';

import Credits from './accounts/credits/Credits';

import FullyPaidNotVerifiedBills from './accounts/fullypaidnotverifiedbills/FullyPaidNotVerifiedBills';

import FullyPaidBills from './accounts/fullypaidbills/FullyPaidBills';

import UnpostedAndUnadjustedJournalEntries from './accounts/unpostedandunadjustedjournalentries/UnpostedAndUnadjustedJournalEntries';

import UnadjustedJournalEntries from './accounts/unadjustedjournalentries/UnadjustedJournalEntries';

import UnpostedJournalEntries from './accounts/unpostedjournalentries/UnpostedJournalEntries';

import PostedJournalEntries from './accounts/postedjournalentries/PostedJournalEntries';

import InActiveAccounts from './accounts/inactiveaccounts/InActiveAccounts';

import Bills from './accounts/bills/Bills';
import BillForm from './accounts/bills/BillForm';

//customers
import DeactivatedCustomers from './customers/deactivatedcustomers/DeactivatedCustomers';

import CustomerAddresses from './customers/customeraddresses/CustomerAddresses';

import ActiveCustomers from './customers/activecustomers/ActiveCustomers';

//employees
import EmployeePayrollSchedules from './employees/employeepayrollschedules/EmployeePayrollSchedules';

import Employees from './employees/employees/Employees';
import EmployeeForm from './employees/employees/EmployeeForm';

import CompanyShareholders from './employees/companyshareholders/CompanyShareholders';

import CompanyManagers from './employees/companymanagers/CompanyManagers';

import CompanyBookkeepers from './employees/companybookkeepers/CompanyBookkeepers';

import CompanyPayrollOfficers from './employees/companypayrollofficers/CompanyPayrollOfficers';

import CompanyDrivers from './employees/companydrivers/CompanyDrivers';

import CompanyManufacturingPersonells from './employees/companymanufacturingpersonells/CompanyManufacturingPersonells';

import CompanyInventoryControllers from './employees/companyinventorycontrollers/CompanyInventoryControllers';

import CompanySalesreps from './employees/companysalesreps/CompanySalesreps';

import PendingEmployeeLeaves from './employees/pendingemployeeleaves/PendingEmployeeLeaves';

import AuthorisedEmployeeLeaves from './employees/authorisedemployeeleaves/AuthorisedEmployeeLeaves';

import DeclinedEmployeeLeaves from './employees/declinedemployeeleaves/DeclinedEmployeeLeaves';

import EmployeeContracts from './employees/employeecontracts/EmployeeContracts';

import EmployeeContractsTerminations from './employees/employeecontractsterminations/EmployeeContractsTerminations';

import EmployeeDepartments from './employees/employeedepartments/EmployeeDepartments';

import EmployeeLeaves from './employees/employeeleaves/EmployeeLeaves';

import EmployeePaygrades from './employees/employeepaygrades/EmployeePaygrades';

import EmployeeAllowances from './employees/employeeallowances/EmployeeAllowances';

import EmployeePayDeductions from './employees/employeepaydeductions/EmployeePayDeductions';

import EmployeePayCommissionRules from './employees/employeepaycommissionrules/EmployeePayCommissionRules';

import EmployeePayrollTaxes from './employees/employeepayrolltaxes/EmployeePayrollTaxes';

import EmployeePayrollDates from './employees/employeepayrolldates/EmployeePayrollDates';

import EmployeePayslips from './employees/employeepayslips/EmployeePayslips';

import EmployeeConfigForm from './employees/employeeconfig/EmployeeConfigForm';

import EmployeeAttendanceTimesheets from './employees/employeeattendancetimesheets/EmployeeAttendanceTimesheets';

//events
import EventConfigForm from './events/eventconfig/EventConfigForm';

import UpcomingEvents from './events/upcomingevents/UpcomingEvents';

import CompletedEvents from './events/completedevents/CompletedEvents';

//inventory
import InventoryCategories from './inventory/inventorycategories/InventoryCategories';

import DebitNotes from './inventory/debitnotes/DebitNotes';
import DebitNoteForm from './inventory/debitnotes/DebitNoteForm';

import InventoryOrders from './inventory/inventoryorders/InventoryOrders';
import InventoryOrderForm from './inventory/inventoryorders/InventoryOrderForm';

import InventoryOrderpayments from './inventory/inventoryorderpayments/InventoryOrderpayments';

import Warehouses from './inventory/warehouses/Warehouses';

import InventoryStockItems from './inventory/inventorystockitems/InventoryStockItems';

import StorageMedias from './inventory/storagemedias/StorageMedias';

import InventoryReceipts from './inventory/inventoryreceipts/InventoryReceipts';

import StockAdjustments from './inventory/stockadjustments/StockAdjustments';

import InventoryStockTakes from './inventory/inventorystocktakes/InventoryStockTakes';

import ActiveSuppliers from './inventory/activesuppliers/ActiveSuppliers';

import DeActivedSuppliers from './inventory/deactivedsuppliers/DeActivedSuppliers';

import SupplierAddresses from './inventory/supplieraddresses/SupplierAddresses';

import RawMaterials from './inventory/rawmaterials/RawMaterials';

import Equipments from './inventory/equipments/Equipments';

import Consumables from './inventory/consumables/Consumables';

import FullyReceivedAndTotalPaidForOrders from './inventory/fullyreceivedandtotalpaidfororders/FullyReceivedAndTotalPaidForOrders';

import FullyReceivedTotalPaidForAndVerifiedOrders from './inventory/fullyreceivedtotalpaidforandverifiedorders/FullyReceivedTotalPaidForAndVerifiedOrders';

//invoicing
import CreditNotes from './invoicing/creditnotes/CreditNotes';

import Payments from './invoicing/payments/Payments';

import Receipts from './invoicing/receipts/Receipts';

import InvoiceLines from './invoicing/invoicelines/InvoiceLines';

import SalesGroupsPricingDiscounts from './invoicing/salesgroupspricingdiscounts/SalesGroupsPricingDiscounts';
import SalesGroupsPricingDiscountForm from './invoicing/salesgroupspricingdiscounts/SalesGroupsPricingDiscountForm';

import Quotations from './invoicing/quotations/Quotations';

import UnverifiedInvoices from './invoicing/unverifiedinvoices/UnverifiedInvoices';

import OverdueInvoices from './invoicing/overdueinvoices/OverdueInvoices';

import VoidedInvoices from './invoicing/voidedinvoices/VoidedInvoices';

import RefundedInvoices from './invoicing/refundedinvoices/RefundedInvoices';

import FullypaidNotYetSalesInvoices from './invoicing/fullypaidnotyetsalesinvoices/FullypaidNotYetSalesInvoices';

import Sales from './invoicing/sales/Sales';
import SalesForm from './invoicing/sales/SalesForm';

//manufacture
import UnverifiedProductionProcesses from './manufacture/unverifiedproductionprocesses/UnverifiedProductionProcesses';

import VerifiedProductionProcesses from './manufacture/verifiedproductionprocesses/VerifiedProductionProcesses';

import ManufacturedStockItems from './manufacture/manufacturedstockitems/ManufacturedStockItems';
import ManufacturedStockItemForm from './manufacture/manufacturedstockitems/ManufacturedStockItemForm';

import ProcessMachines from './manufacture/processmachines/ProcessMachines';

import ProcessMachineGroups from './manufacture/processmachinegroups/ProcessMachineGroups';
import ProcessMachineGroupForm from './manufacture/processmachinegroups/ProcessMachineGroupForm';

import Shifts from './manufacture/shifts/Shifts';
import ShiftForm from './manufacture/shifts/ShiftForm';

import ShiftSchedules from './manufacture/shiftschedules/ShiftSchedules';
import ShiftScheduleForm from './manufacture/shiftschedules/ShiftScheduleForm';

import ProcessRates from './manufacture/processrates/ProcessRates';
import ProcessRateForm from './manufacture/processrates/ProcessRateForm';
import ProductionProcessForm from './manufacture/productionprocess/ProductionProcessForm';

import ProductionOrders from './manufacture/productionorders/ProductionOrders';

import ManufacturingTeams from './manufacture/manufacturingteams/ManufacturingTeams';
import ManufacturingTeamForm from './manufacture/manufacturingteams/ManufacturingTeamForm';

import ManufacturingPersonels from './manufacture/manufacturingpersonels/ManufacturingPersonels';
import ManufacturingPersonelForm from './manufacture/manufacturingpersonels/ManufacturingPersonelForm';

import ProcessProducts from './manufacture/processproducts/ProcessProducts';
import ProcessProductForm from './manufacture/processproducts/ProcessProductForm';

import WasteGenerationReports from './manufacture/wastegenerationreports/WasteGenerationReports';
import WasteGenerationReportForm from './manufacture/wastegenerationreports/WasteGenerationReportForm';

import ProcessedProductStockReceipts from './manufacture/processedproductstockreceipts/ProcessedProductStockReceipts';
import ProcessedProductStockReceiptForm from './manufacture/processedproductstockreceipts/ProcessedProductStockReceiptForm';

import ProcessedProductStockAdjustments from './manufacture/processedproductstockadjustments/ProcessedProductStockAdjustments';
import ProcessedProductStockAdjustmentForm from './manufacture/processedproductstockadjustments/ProcessedProductStockAdjustmentForm';

import ProcessedProductStockTakes from './manufacture/processedproductstocktakes/ProcessedProductStockTakes';
import ProcessedProductStockTakeForm from './manufacture/processedproductstocktakes/ProcessedProductStockTakeForm';

import Alerts from './components/alerts/Alert';

//Alert Options
const alertOptions = {
	timeout: 30000,
	position: 'top center'
}

class App extends Component {
	render(){
		return (
			<Provider store={store}>
				<AlertProvider template={AlertTemplate} {...alertOptions} >
					<Fragment>
						< Alerts />
						<Switch>
							<Route exact path='/' component={Home} />
							<Route exact path='/dashboard' component={Content} />
							<Route exact path='/dash-view' component={Dashboard} />

							<Route exact path='/unverifiedproductionprocesses' component={UnverifiedProductionProcesses} />

							<Route exact path='/verifiedproductionprocesses' component={VerifiedProductionProcesses} />

							<Route exact path='/manufacturedstockitems' component={ManufacturedStockItems} />
							<Route exact path='/manufacturedstockitems/create' component={ManufacturedStockItemForm} />

							<Route exact path='/processmachines' component={ProcessMachines} />

							<Route exact path='/processmachinegroups' component={ProcessMachineGroups} />
							<Route exact path='/processmachinegroups/create' component={ProcessMachineGroupForm} />

							<Route exact path='/shifts' component={Shifts} />
							<Route exact path='/shifts/create' component={ShiftForm} />

							<Route exact path='/shiftschedules' component={ShiftSchedules} />
							<Route exact path='/shiftschedules/create' component={ShiftScheduleForm} />

							<Route exact path='/processrates' component={ProcessRates} />
							<Route exact path='/processrates/create' component={ProcessRateForm} />

							<Route exact path='/productionorders' component={ProductionOrders} />

							<Route exact path='/manufacturingteams' component={ManufacturingTeams} />
							<Route exact path='/manufacturingteams/create' component={ManufacturingTeamForm} />

							<Route exact path='/manufacturingpersonels' component={ManufacturingPersonels} />
							<Route exact path='/manufacturingpersonels/create' component={ManufacturingPersonelForm} />
							<Route exact path='/productionprocess' component={ProductionProcessForm} />
							<Route exact path='/processproducts' component={ProcessProducts} />
							<Route exact path='/processproducts/create' component={ProcessProductForm} />

							<Route exact path='/wastegenerationreports' component={WasteGenerationReports} />
							<Route exact path='/wastegenerationreports/create' component={WasteGenerationReportForm} />

							<Route exact path='/processedproductstockreceipts' component={ProcessedProductStockReceipts} />
							<Route exact path='/processedproductstockreceipts/create' component={ProcessedProductStockReceiptForm} />

							<Route exact path='/processedproductstockadjustments' component={ProcessedProductStockAdjustments} />
							<Route exact path='/processedproductstockadjustments/create' component={ProcessedProductStockAdjustmentForm} />

							<Route exact path='/processedproductstocktakes' component={ProcessedProductStockTakes} />
							<Route exact path='/processedproductstocktakes/create' component={ProcessedProductStockTakeForm} />

							<Route exact path='/creditnotes' component={CreditNotes} />

							<Route exact path='/payments' component={Payments} />

							<Route exact path='/receipts' component={Receipts} />

							<Route exact path='/invoicelines' component={InvoiceLines} />

							<Route exact path='/salesgroupspricingdiscounts' component={SalesGroupsPricingDiscounts} />
							<Route exact path='/salesgroupspricingdiscounts/create' component={SalesGroupsPricingDiscountForm} />

							<Route exact path='/quotations' component={Quotations} />

							<Route exact path='/unverifiedinvoices' component={UnverifiedInvoices} />

							<Route exact path='/overdueinvoices' component={OverdueInvoices} />

							<Route exact path='/voidedinvoices' component={VoidedInvoices} />

							<Route exact path='/refundedinvoices' component={RefundedInvoices} />

							<Route exact path='/fullypaidnotyetsalesinvoices' component={FullypaidNotYetSalesInvoices} />

							<Route exact path='/sales' component={Sales} />
							<Route exact path='/sales/create' component={SalesForm} />

							<Route exact path='/inventorycategories' component={InventoryCategories} />

							<Route exact path='/debitnotes' component={DebitNotes} />
							<Route exact path='/debitnotes/create' component={DebitNoteForm} />

							<Route exact path='/inventoryorders' component={InventoryOrders} />
							<Route exact path='/inventoryorders/create' component={InventoryOrderForm} />

							<Route exact path='/inventoryorderpayments' component={InventoryOrderpayments} />

							<Route exact path='/warehouses' component={Warehouses} />

							<Route exact path='/inventorystockitems' component={InventoryStockItems} />

							<Route exact path='/storagemedias' component={StorageMedias} />

							<Route exact path='/inventoryreceipts' component={InventoryReceipts} />

							<Route exact path='/stockadjustments' component={StockAdjustments} />

							<Route exact path='/inventorystocktakes' component={InventoryStockTakes} />

							<Route exact path='/activesuppliers' component={ActiveSuppliers} />

							<Route exact path='/deactivedsuppliers' component={DeActivedSuppliers} />

							<Route exact path='/supplieraddresses' component={SupplierAddresses} />

							<Route exact path='/rawmaterials' component={RawMaterials} />

							<Route exact path='/equipments' component={Equipments} />

							<Route exact path='/consumables' component={Consumables} />

							<Route exact path='/fullyreceivedandtotalpaidfororders' component={FullyReceivedAndTotalPaidForOrders} />

							<Route exact path='/fullyreceivedtotalpaidforandverifiedorders' component={FullyReceivedTotalPaidForAndVerifiedOrders} />

							<Route exact path='/completedevents' component={CompletedEvents} />

							<Route exact path='/eventconfig' component={EventConfigForm} />

							<Route exact path='/upcomingevents' component={UpcomingEvents} />

							<Route exact path='/employees' component={Employees} />
							<Route exact path='/employees/create' component={EmployeeForm} />

							<Route exact path='/companyshareholders' component={CompanyShareholders} />

							<Route exact path='/companymanagers' component={CompanyManagers} />

							<Route exact path='/companybookkeepers' component={CompanyBookkeepers} />

							<Route exact path='/companypayrollofficers' component={CompanyPayrollOfficers} />

							<Route exact path='/companydrivers' component={CompanyDrivers} />

							<Route exact path='/companymanufacturingpersonells' component={CompanyManufacturingPersonells} />

							<Route exact path='/companyinventorycontrollers' component={CompanyInventoryControllers} />

							<Route exact path='/companysalesreps' component={CompanySalesreps} />

							<Route exact path='/pendingemployeeleaves' component={PendingEmployeeLeaves} />

							<Route exact path='/authorisedemployeeleaves' component={AuthorisedEmployeeLeaves} />

							<Route exact path='/declinedemployeeleaves' component={DeclinedEmployeeLeaves} />

							<Route exact path='/employeecontracts' component={EmployeeContracts} />

							<Route exact path='/employeecontractsterminations' component={EmployeeContractsTerminations} />

							<Route exact path='/employeedepartments' component={EmployeeDepartments} />

							<Route exact path='/employeeleaves' component={EmployeeLeaves} />

							<Route exact path='/employeepaygrades' component={EmployeePaygrades} />

							<Route exact path='/employeeallowances' component={EmployeeAllowances} />

							<Route exact path='/employeepaydeductions' component={EmployeePayDeductions} />

							<Route exact path='/employeepaycommissionrules' component={EmployeePayCommissionRules} />

							<Route exact path='/employeepayrolltaxes' component={EmployeePayrollTaxes} />

							<Route exact path='/employeepayrolldates' component={EmployeePayrollDates} />

							<Route exact path='/employeepayslips' component={EmployeePayslips} />

							<Route exact path='/employeeconfig' component={EmployeeConfigForm} />

							<Route exact path='/employeeattendancetimesheets' component={EmployeeAttendanceTimesheets} />

							<Route exact path='/deactivatedcustomers' component={DeactivatedCustomers} />

							<Route exact path='/customeraddresses' component={CustomerAddresses} />

							<Route exact path='/activecustomers' component={ActiveCustomers} />

							<Route exact path='/taxes' component={Taxes} />

							<Route exact path='/accountingconfiguration' component={AccountingConfigurationForm} />

							<Route exact path='/assets' component={Assets} />

							<Route exact path='/journals' component={Journals} />

							<Route exact path='/currencies' component={Currencies} />

							<Route exact path='/accounts' component={Accounts} />

							<Route exact path='/interestbearingaccounts' component={InterestBearingAccounts} />

							<Route exact path='/ledgers' component={Ledgers} />

							<Route exact path='/accountingposts' component={AccountingPosts} />

							<Route exact path='/workbooks' component={Workbooks} />

							<Route exact path='/accountingadjustments' component={AccountingAdjustments} />

							<Route exact path='/debits' component={Debits} />

							<Route exact path='/credits' component={Credits} />

							<Route exact path='/fullypaidnotverifiedbills' component={FullyPaidNotVerifiedBills} />

							<Route exact path='/fullypaidbills' component={FullyPaidBills} />

							<Route exact path='/unpostedandunadjustedjournalentries' component={UnpostedAndUnadjustedJournalEntries} />

							<Route exact path='/unadjustedjournalentries' component={UnadjustedJournalEntries} />

							<Route exact path='/unpostedjournalentries' component={UnpostedJournalEntries} />

							<Route exact path='/postedjournalentries' component={PostedJournalEntries} />

							<Route exact path='/inactiveaccounts' component={InActiveAccounts} />

							<Route exact path='/bills' component={Bills} />
							<Route exact path='/bills/create' component={BillForm} />

							<Route exact path='/billpayments' component={BillPayments} />

							<Route exact path='/employeepayrollschedules' component={EmployeePayrollSchedules} />

							<Route component={Default} />
						</Switch>
					</Fragment>
				</AlertProvider>
			</Provider>
		);
	}
}

export default App;
