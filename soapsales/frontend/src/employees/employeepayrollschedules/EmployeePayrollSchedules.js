import 'primeicons/primeicons.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import React, { Component, Fragment } from 'react';
import {Growl} from 'primereact/growl';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';
import {Calendar} from 'primereact/calendar';
import {ProgressBar} from 'primereact/progressbar';
import { getEmployeePayrollSchedules, addEmployeePayrollSchedule, editEmployeePayrollSchedule, deleteEmployeePayrollSchedule } from '..//../actions/employeepayrollschedules';
import { FileUpload } from 'primereact/fileupload';
import { Dialog } from 'primereact/dialog';
import "./form.css";


class EmployeePayrollSchedules extends Component {

    emptyEmployeePayrollSchedule = {
        name: ''
    };


    constructor() {
        super();
        this.state = {
            employeepayrollschedules: [],
            globalFilter: null,
            dateFilter: null,
            selectedEmployeePayrollSchedules: null,
            employeepayrollscheduleDialog: false,
            deleteEmployeePayrollScheduleDialog: false,
            deleteEmployeePayrollSchedulesDialog: false,
            visibleNewDialog: false,
            visibleEditDialog: false,
            visibleDeleteDialog: false,

            selectRow: {
                name: ''
            },
            newData: {
                name: ''
            },
            submitted: false,
        };

        this.actionBodyTemplate = this.actionBodyTemplate.bind(this);
        this.filterDate = this.filterDate.bind(this);
        this.export = this.export.bind(this);
        this.renderDateFilter = this.renderDateFilter.bind(this)
        this.onDateFilterChange = this.onDateFilterChange.bind(this)
        this.formatDate = this.formatDate.bind(this)

        this.openNew = this.openNew.bind(this);
        this.hideDialog = this.hideDialog.bind(this);
        this.saveEmployeePayrollSchedule = this.saveEmployeePayrollSchedule.bind(this);
        this.editEmployeePayrollSchedule = this.editEmployeePayrollSchedule.bind(this);
        this.onOpenEditDialog = this.onOpenEditDialog.bind(this);
        this.onHideEditDialog = this.onHideEditDialog.bind(this);
        this.editDataValidateError = this.editDataValidateError.bind(this);
        this.confirmDeleteEmployeePayrollSchedule = this.confirmDeleteEmployeePayrollSchedule.bind(this);
        this.deleteEmployeePayrollSchedule = this.deleteEmployeePayrollSchedule.bind(this);
        this.confirmDeleteSelected = this.confirmDeleteSelected.bind(this);
        this.deleteSelectedEmployeePayrollSchedules = this.deleteSelectedEmployeePayrollSchedules.bind(this);
        this.onChange = this.onChange.bind(this);
        this.hideDeleteEmployeePayrollScheduleDialog = this.hideDeleteEmployeePayrollScheduleDialog.bind(this);
        this.hideDeleteEmployeePayrollSchedulesDialog = this.hideDeleteEmployeePayrollSchedulesDialog.bind(this);
    }

    static propTypes = {
        employeepayrollschedules : PropTypes.array.isRequired,
        getEmployeePayrollSchedules: PropTypes.func.isRequired,
        addEmployeePayrollSchedule: PropTypes.func.isRequired,
        editEmployeePayrollSchedule: PropTypes.func.isRequired,
        deleteEmployeePayrollSchedule: PropTypes.func.isRequired,
    };

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    openNew() {
        this.setState({
            newData: {
                name: ''
            },
            submitted: false,
            employeepayrollscheduleDialog: true
        });
    }

    hideDialog() {
        this.setState({
            submitted: false,
            employeepayrollscheduleDialog: false
        });
    }

    hideDeleteEmployeePayrollScheduleDialog() {
        this.setState({ deleteEmployeePayrollScheduleDialog: false });
    }

    hideDeleteEmployeePayrollSchedulesDialog() {
        this.setState({ deleteEmployeePayrollSchedulesDialog: false });
    }

    componentDidMount() {
        this.props.getEmployeePayrollSchedules();
    }


    saveEmployeePayrollSchedule = (e) => {
        e.preventDefault();
        const { name } = this.state;
        const employeepayrollschedule = { name };
        this.props.addEmployeePayrollSchedule(employeepayrollschedule);
        this.setState({
            name: '',
            employeepayrollscheduleDialog: false
        });
        this.props.history.push('/employeepayrollschedules');
    };



    onHideEditDialog(event) {
        this.setState({
            visibleEditDialog: false,
            selectRow: {
                name: ''
            }
        });
    }

    //Edit Dialog
    onOpenEditDialog(event, rowData) {
        this.setState({
            visibleEditDialog: true,
            selectRow: rowData
        });
    }


    editEmployeePayrollSchedule(e) {
        const errors = this.editDataValidateError();
        const {
            name
        } = this.state.selectRow;
        const employeepayrollschedule = {
            name
        };
        if (errors.length !== 0) {
            this.growl.show(errors);
        } else {
            this.props.editEmployeePayrollSchedule(this.state.selectRow.id, employeepayrollschedule);
            this.onHideEditDialog(e);
            this.growl.show({severity: 'success', summary: 'Succesfully', detail: 'Edited'});
        }
    }


    editDataValidateError() {
        const errorList = [];
        if (!this.state.selectRow.name) {
            errorList.push({
                severity: 'error',
                summary: 'cant be left blank!',
                detail: 'Add'
            });
        }
        return errorList;
    }


    confirmDeleteEmployeePayrollSchedule(employeepayrollschedule) {
        this.setState({
            employeepayrollschedule,
            deleteEmployeePayrollScheduleDialog: true
        });
    }

    deleteEmployeePayrollSchedule() {
        this.props.deleteEmployeePayrollSchedule();
        this.setState({
            deleteEmployeePayrollScheduleDialog: false,
            employeepayrollschedule: this.emptyEmployeePayrollSchedule
        });
    }

    confirmDeleteSelected() {
        this.setState({ deleteEmployeePayrollSchedulesDialog: true });
    }

    deleteSelectedEmployeePayrollSchedules() {
        this.props.deleteEmployeePayrollSchedule();
        this.setState({
            deleteEmployeePayrollSchedulesDialog: false,
            selectedEmployeePayrollSchedules: null
        });
    }


    renderHeader() {
        return (
            <div className="table-head">
                <h1>Manage Employee Payroll Schedules</h1>
                <div className="datatable-icons">
                    <div className="h"><FileUpload mode="basic" accept="image/*" maxFileSize={1000000} label="Import" chooseLabel="Import" className="p-mr-2 p-d-inline-block" /></div>
                    <div className="fancy-icon"><Button label="EXPORT TO CSV" icon="pi pi-upload" className="p-button-rounded p-button-help" onClick={this.export} /></div>
                    <Button label="CREATE NEW EMPLOYEE PAYROLL SCHEDULE" className="p-button-success p-mr-2" onClick={this.openNew} />
                    <div className="fancy-icon"><Button type="button" className="p-button-warning p-button-rounded" icon="pi pi-file-pdf" iconPos="right" label="EXPORT TO PDF" onClick={this.export}></Button></div>
                    <div className="fancy-icon"><Button type="button" className="p-button-warning p-button-rounded" icon="pi pi-print" iconPos="right" label="PRINT" onClick={this.export}></Button></div>
                    <InputText className="fancy-icon" type="search" onInput={(e) => this.setState({globalFilter: e.target.value})} placeholder="Search" />
                </div>
            </div>
        );
    }

    activityBodyTemplate(rowData) {
        return <ProgressBar value={rowData.activity} showValue={false} />;
    }

    actionBodyTemplate(rowData) {
        return (
            <>
                <Button
                    type="button"
                    icon="pi pi-pencil"
                    className="p-button-success"
                    style={{marginRight: '.5em', fontSize: '12px'}}
                    onClick={(e) => {
                        this.onOpenEditDialog(e, rowData);
                    }}>
                </Button>
                <Button icon="pi pi-trash" className="p-button-rounded p-button-warning" onClick={() => this.confirmDeleteEmployeePayrollSchedule(rowData)} />
            </>
        );
    }


    renderDateFilter() {
        return (
            <Calendar value={this.state.dateFilter} onChange={this.onDateFilterChange} placeholder="Registration Date" dateFormat="yy-mm-dd" className="p-column-filter" />
        );
    }

    onDateFilterChange(event) {
        if (event.value !== null)
            this.dt.filter(this.formatDate(event.value), 'date', 'equals');
        else
            this.dt.filter(null, 'date', 'equals');

        this.setState({dateFilter: event.value});
    }

    filterDate(value, filter) {
        if (filter === undefined || filter === null || (typeof filter === 'string' && filter.trim() === '')) {
            return true;
        }

        if (value === undefined || value === null) {
            return false;
        }

        return value === this.formatDate(filter);
    }

    export() {
        this.dt.exportCSV();
    }

    formatDate(date) {
        let month = date.getMonth() + 1;
        let day = date.getDate();

        if (month < 10) {
            month = '0' + month;
        }

        if (day < 10) {
            day = '0' + day;
        }

        return date.getFullYear() + '-' + month + '-' + day;
    }


    render() {
        const employeepayrollscheduleDialogFooter = (
            <>
                <Button label="Cancel" icon="pi pi-times" className="p-button-text" onClick={this.hideDialog} />
                <Button label="Save" icon="pi pi-check" className="p-button-text" onClick={this.saveEmployeePayrollSchedule} />
            </>
        );

        const editDialogFooter = (
            <div>

                <Button label="Cancel" className="p-button-danger" icon="pi pi-times" onClick={this.onHideEditDialog}/>
                <Button label="Save" className="p-button-success" icon="pi pi-check" onClick={this.editEmployeePayrollSchedule}/>
            </div>
        );


        const deleteEmployeePayrollSchedulesDialogFooter = (
            <>
                <Button label="No" icon="pi pi-times" className="p-button-text" onClick={this.hideDeleteEmployeePayrollSchedulesDialog} />
                <Button label="Yes" icon="pi pi-check" className="p-button-text" onClick={this.deleteSelectedEmployeePayrollSchedules} />
            </>
        );

        const header = this.renderHeader();
        const { name } = this.state;

        return (
            <Fragment>
                <Growl ref={(el) => this.growl = el}/>
                <div className="datatable-doc-demo">
                    <DataTable ref={(el) => this.dt = el} value={this.props.employeepayrollschedules}
                        style={{backgroundColor: '#4EB08E'}}
                        header={header} responsive className="table-head" dataKey="id" rowHover globalFilter={this.state.globalFilter}
                        selection={this.state.selectedEmployeePayrollSchedules} onSelectionChange={e => this.setState({selectedEmployeePayrollSchedules: e.value})}
                        paginator rows={10} emptyMessage="No Employee Payroll Schedules found" currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
                        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" rowsPerPageOptions={[10,25,50]}>
                        <Column className="table-field" selectionMode="multiple" style={{width:'3em', backgroundColor: '#4EB0A5'}}/>
                        <Column className="table-field" field="id" header="ID" sortable filter filterPlaceholder="Search by ID" style={{width:'3em', backgroundColor: '#4EB0A5'}}/>
                        <Column className="table-field" field="name" header="Name" sortable filter filterPlaceholder="Search by Name" style={{width:'3em', backgroundColor: '#4EB0A5'}}/>
                        <Column className="table-field" body={this.actionBodyTemplate} headerStyle={{width: '3em', textAlign: 'center', backgroundColor: '#4EB0A5'}} bodyStyle={{textAlign: 'center', overflow: 'visible', backgroundColor: '#4EB0A5'}} />
                    </DataTable>
                    <Dialog
                        visible={this.state.employeepayrollscheduleDialog}
                        style={{ width: '900px' }}
                        header="Employee Payroll Schedules Details"
                        modal className="p-fluid"
                        footer={employeepayrollscheduleDialogFooter}
                        onHide={this.hideDialog}
                    >
                        <div className="p-fluid p-formgrid p-grid">
                            <div className="p-field p-col-12 p-md-12">
                                <label>Name</label>
                                <span className="p-float-label">
                                    <InputText
                                      name="name"
                                      onChange={this.onChange}
                                      value={name}
                                    />
                                    <label htmlFor="inputtext">Name</label>
                                </span>
                            </div>
                        </div>
                    </Dialog>
                    <Dialog
                        footer={editDialogFooter}
                        visible={this.state.visibleEditDialog}
                        style={{ width: '700px' }}
                        header="UPDATE EMPLOYEE PAYROLL SCHEDULE"
                        modal={true} onHide={this.onHideEditDialog}
                    >
                        <span className="ui-float-label">
                            <label htmlFor="inName">Name </label>
                            <InputText id="inName" value={this.state.selectRow.name}
                                       style={{marginLeft: '.5em'}} onChange={(e) =>
                                this.setState({
                                    selectRow: {
                                        ...this.state.selectRow,
                                        name: e.target.value
                                    }
                                })
                            }/>
                        </span>
                    </Dialog>
                    <Dialog visible={this.state.deleteEmployeePayrollSchedulesDialog} style={{ width: '450px' }} header="Confirm" modal footer={deleteEmployeePayrollSchedulesDialogFooter} onHide={this.hideDeleteEmployeePayrollSchedulesDialog}>
                        <div className="confirmation-content">
                            <i className="pi pi-exclamation-triangle p-mr-3" style={{ fontSize: '2rem'}} />
                            {this.state.employeepayrollschedule && <span>Are you sure you want to delete the selected?</span>}
                        </div>
                    </Dialog>
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = state =>({
    employeepayrollschedules: state.employeepayrollschedules.employeepayrollschedules
})

export default connect(mapStateToProps, { getEmployeePayrollSchedules, addEmployeePayrollSchedule, editEmployeePayrollSchedule, deleteEmployeePayrollSchedule } ) (EmployeePayrollSchedules);
