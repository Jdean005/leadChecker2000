import { LightningElement, api, wire, track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { getRecord } from 'lightning/uiRecordApi';
import LEAD_FIRSTNAME_FIELD from '@salesforce/schema/Lead.FirstName';
import LEAD_LASTNAME_FIELD from '@salesforce/schema/Lead.LastName';
import LEAD_TITLE_FIELD from '@salesforce/schema/Lead.Title';
import LEAD_EMAIL_FIELD from '@salesforce/schema/Lead.Email';
import LEAD_LEADSOURCE_FIELD from '@salesforce/schema/Lead.LeadSource';
import LEAD_INDUSTRY_FIELD from '@salesforce/schema/Lead.Industry';
import LEAD_COMPANY_FIELD from '@salesforce/schema/Lead.Company';
import LEAD_PHONE_FIELD from '@salesforce/schema/Lead.Phone';

export default class LeadQualityComponent extends LightningElement {
    @api recordId;
    @api componentTitle;
    @api objectApiName;
    @api toastTitle;
    @api toastBody;
    @track progress;
    @track completionValue;

// field reference list from above import functions
fields=[LEAD_FIRSTNAME_FIELD,LEAD_LASTNAME_FIELD,LEAD_TITLE_FIELD,LEAD_EMAIL_FIELD,LEAD_LEADSOURCE_FIELD,LEAD_INDUSTRY_FIELD,LEAD_COMPANY_FIELD,LEAD_PHONE_FIELD];

// initiate wire service 
 @wire(getRecord, {recordId: '$recordId',fields:[LEAD_FIRSTNAME_FIELD,LEAD_LASTNAME_FIELD,LEAD_TITLE_FIELD,LEAD_EMAIL_FIELD,LEAD_LEADSOURCE_FIELD,LEAD_INDUSTRY_FIELD,LEAD_COMPANY_FIELD,LEAD_PHONE_FIELD]})
lead;
    get firstname() {
        return this.lead.data.fields.FirstName.value;
    }
    get lastname(){
        return this.lead.data.fields.LastName.value;
    }
    get title() {
        return this.lead.data.fields.Title.value;
    }
    get email(){
        return this.lead.data.fields.Email.value;
    }
    get source(){
        return this.lead.data.fields.Source.value;
    }
    get industry(){
        return this.lead.data.fields.Industry.value;
    }
    get company(){
        return this.lead.data.fields.Company.value;
    }
    get phone(){
        return this.lead.data.fields.Phone.value;
    }

// handle load is leveraged on load of component to run initial calculations
    handleLoad(event){
        let progress = 0;
        const inputFields = this.template.querySelectorAll(
            'lightning-input-field' 
        );
        if(inputFields){
            inputFields.forEach(field => {
                if(field.value) progress++;
            });
            this.completionValue = progress*12.5;
        }
    }    

// handle reset is leveraged in the cancel button in the html file
    handleReset(event) {
        const inputFields = this.template.querySelectorAll(
            'lightning-input-field'
        );
        if (inputFields) {
            inputFields.forEach(field => {
                field.reset();
            });
        }
    }

    // handle submit is leveraged in the update lead button in the html file   
    handleSubmit(event){
        console.log(this.lead.recordId)
    } 

    // handle change event is leveraged in the field change to determine progress completion of component completion
    handleChange(event){
        let progress = 0;
        const inputFields = this.template.querySelectorAll(
            'lightning-input-field' 
        );
        if(inputFields){
            inputFields.forEach(field => {
                if(field.value) progress++;
            });
            this.completionValue = progress*12.5;
        }
    }

    // handle success is leveraged in the update lead button in the html file and used to power the toast option
    handleSuccess(event) {
        const evt = new ShowToastEvent({
            title: this.toastTitle,
            message: this.toastBody,
            variant: 'success',
        });
        this.dispatchEvent(evt);
    }
}