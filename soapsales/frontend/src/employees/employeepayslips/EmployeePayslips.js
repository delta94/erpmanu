import 'primeicons/primeicons.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';
import {Calendar} from 'primereact/calendar';
import {ProgressBar} from 'primereact/progressbar';
import { FileUpload } from 'primereact/fileupload';
import { getEmployeePayslips} from '..//../actions/employeepayslips';
import "./form.css";
import { Link } from 'react-router-dom';


class EmployeePayslips extends Component {

    constructor() {
        super();
        this.state = {
            employeepayslips: null,
            globalFilter: null,
            dateFilter: null,
            selectedEmployeePayslips: null,

        };
        this.actionBodyTemplate = this.actionBodyTemplate.bind(this);
        this.filterDate = this.filterDate.bind(this);
        this.export = this.export.bind(this);
        this.renderDateFilter = this.renderDateFilter.bind(this)
        this.onDateFilterChange = this.onDateFilterChange.bind(this)
        this.formatDate = this.formatDate.bind(this)

    }

    static propTypes = {
        employeepayslips : PropTypes.array.isRequired,
        getEmployeePayslips: PropTypes.func.isRequired,

    };

    componentDidMount() {
        this.props.getEmployeePayslips();
    }


    renderHeader() {
        return (
            <div className="table-head">
                <h1>Manage Employee Payslips</h1>
                <div className="datatable-fancy-icons">
                    <div className="fancy-icon"><FileUpload mode="basic" accept="image/*" maxFileSize={1000000} label="Import" chooseLabel="Import" className="p-mr-2 p-d-inline-block" /></div>
                    <div className="fancy-icon"><Button label="Export" icon="pi pi-upload" className="p-button-rounded p-button-help" onClick={this.export} /></div>
                    <div className="fancy-icon"><Button type="button" className="p-button-warning p-button-rounded" icon="pi pi-file-pdf" iconPos="right" label="PDF" onClick={this.export}></Button></div>
                    <div className="fancy-icon"><Button type="button" className="p-button-warning p-button-rounded" icon="pi pi-print" iconPos="right" label="PRINT" onClick={this.export}></Button></div>
                    <InputText className="fancy-icon" type="search" onInput={(e) => this.setState({globalFilter: e.target.value})} placeholder="Search" />
                </div>
            </div>
        )
    }

    activityBodyTemplate(rowData) {
        return <ProgressBar value={rowData.activity} showValue={false} />;
    }

    actionBodyTemplate() {
        return (
            <Link to="/" >
                <Button type="button" label="VIEW-ME" icon="pi pi-pencil" className="p-button-warning p-button-rounded"></Button>
            </Link>
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

        const header = this.renderHeader();

        return (
            <div className="datatable-doc-demo">
                <DataTable ref={(el) => this.dt = el} value={this.props.employeepayslips}
                    style={{background: '#4EB08E'}}
                    header={header} responsive className="table-head" dataKey="id" rowHover globalFilter={this.state.globalFilter}
                    selection={this.state.selectedEmployeePayslips} onSelectionChange={e => this.setState({selectedEmployeePayslips: e.value})}
                    paginator rows={10} emptyMessage="No EmployeePayslips found" currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" rowsPerPageOptions={[10,25,50]}>
                    <Column
                        className="table-field"
                        selectionMode="multiple"
                        style={{width:'3em'}}
                        headerStyle={{width: '3em', backgroundColor: '#4EB0A5', textAlign: 'center'}}
                    />
                    <Column
                        className="table-field"
                        field="id" header="ID"
                        sortable filter
                        filterPlaceholder="Search by ID"
                        style={{width:'3em'}}
                        headerStyle={{width: '3em', backgroundColor: '#4EB0A5', textAlign: 'center'}}
                    />
                    <Column
                        className="table-field"
                        field="employee"
                        header="Employee"
                        sortable filter
                        filterPlaceholder="Search by Employee"
                        style={{width:'3em'}}
                        headerStyle={{width: '3em', backgroundColor: '#4EB0A5', textAlign: 'center'}}
                    />
                    <Column
                        className="table-field"
                        field="payslip_number"
                        header="Payslip Number"
                        sortable filter
                        filterPlaceholder="Search by Payslip Number"
                        style={{width:'3em'}}
                        headerStyle={{width: '3em', backgroundColor: '#4EB0A5', textAlign: 'center'}}
                    />
                    <Column
                        className="table-field"
                        field="status"
                        header="Status"
                        sortable filter
                        filterPlaceholder="Search by Status"
                        style={{width:'3em'}}
                        headerStyle={{width: '3em', backgroundColor: '#4EB0A5', textAlign: 'center'}}
                    />
                    <Column
                        className="table-field"
                        field="start_period"
                        header="Start Period"
                        sortable filter
                        filterPlaceholder="Search by Start Period"
                        style={{width:'3em'}}
                        headerStyle={{width: '3em', backgroundColor: '#4EB0A5', textAlign: 'center'}}
                    />
                    <Column
                        className="table-field"
                        header="EDIT"
                        body={this.actionBodyTemplate}
                        headerStyle={{width: '3em', backgroundColor: '#4EB0A5', textAlign: 'center'}}
                        bodyStyle={{textAlign: 'center', overflow: 'visible', backgroundColor: '#4EB0A5'}}
                    />

                </DataTable>
            </div>
        );
    }
}

const mapStateToProps = state =>({
    employeepayslips: state.employeepayslips.employeepayslips
})

export default connect(mapStateToProps, {getEmployeePayslips} ) (EmployeePayslips);
