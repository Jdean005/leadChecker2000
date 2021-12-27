import { LightningElement, api, wire } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { getRecord } from 'lightning/uiRecordApi';
import LEAD_FIRSTNAME_FIELD from '@salesforce/schema/Lead.FirstName';
import LEAD_LASTNAME_FIELD from '@salesforce/schema/Lead.LastName';
import LEAD_TITLE_FIELD from '@salesforce/schema/Lead.Title';
import LEAD_EMAIL_FIELD from '@salesforce/schema/Lead.Email';
import LEAD_LEADSOURCE_FIELD from '@salesforce/schema/Lead.LeadSource';
import LEAD_INDUSTRY_FIELD from '@salesforce/schema/Lead.Industry';
import LEAD_COMPANY_FIELD from '@salesforce/schema/Lead.Company';

export default class LeadQualityComponent extends LightningElement {
    @api recordId;
    @api objectApiName;
    @api toastTitle;
    @api toastBody;

    fields=[LEAD_FIRSTNAME_FIELD,LEAD_LASTNAME_FIELD,LEAD_TITLE_FIELD,LEAD_EMAIL_FIELD,LEAD_LEADSOURCE_FIELD,LEAD_INDUSTRY_FIELD,LEAD_COMPANY_FIELD];

 @wire(getRecord, {recordId: '$recordId',fields:[LEAD_FIRSTNAME_FIELD,LEAD_LASTNAME_FIELD,LEAD_TITLE_FIELD,LEAD_EMAIL_FIELD,LEAD_LEADSOURCE_FIELD,LEAD_INDUSTRY_FIELD,LEAD_COMPANY_FIELD]})
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
    handleSuccess(event) {
        const evt = new ShowToastEvent({
            title: this.toastTitle,
            message: this.toastBody,
            variant: 'success',
        });
        this.dispatchEvent(evt);
    }
}