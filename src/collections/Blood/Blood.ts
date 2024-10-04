import { PRODUCT_CATEGORIES } from "../../config";
import { CollectionConfig } from "payload/types";

export const Blood : CollectionConfig = {
    slug : "blood",
    admin: {
        useAsTitle : "name"
    },
    access : {},
    fields : [
        {
            //data relationship to the donor
            name : "user",
            type : "relationship",
            relationTo : "users",
            required: true,
            hasMany: false, //one blood offering only belong to one person
            admin : {
                condition : ()=> false //hide this donor data field from the admin dashboard
            }
        },
        {
            //data of donor
            name : "name",
            label : "Name", //should be owner identity ?? 
            type : "text",
            required : true //every blood offered should have identity 
        },
        {
            //donor current location/adress
            name : "phone",
            label : "Phone number",
            type : "text",
            required : true,
        },
        {
            //data of blood
            name : "Age",
            label : "Age", //should be owner identity ?? 
            type : "number",
            required : true //every blood offered should have identity 
        },
        {
            //data of blood
            name : "SystolicBP",
            label : "Systolic blood pressure", //should be owner identity ?? 
            type : "number",
            required : true //every blood offered should have identity 
        },
        {
            //data of blood
            name : "DiastolicBP",
            label : "Diastolic blood pressure", //should be owner identity ?? 
            type : "number",
            required : true //every blood offered should have identity 
        },
        {
            //data of blood
            name : "BP",
            label : "Blood glucose level", //should be owner identity ?? 
            type : "number",
            required : true //every blood offered should have identity 
        },
        {
            //data of blood
            name : "HeartRate",
            label : "Heart Rate", //should be owner identity ?? 
            type : "number",
            required : true //every blood offered should have identity 
        },
        {
            //donor current location/adress
            name : "adress",
            label : "donor adress",
            type : "text",
            required : true,
        },
        {
            //donor current location/adress
            name : "blood_acceptance",
            label : "blood acceptance",
            type : "text",
            required : true,
        },
        {
            name : "blood_type",
            label : "Blood Type",
            type : "select",
            options: PRODUCT_CATEGORIES.map(
                ({label, value}) => ({label, value})
            ),
            required : true
        },
        //{
            //name : "blood_files",
            //label : "blood file(s)",
            //type : "relationship",
            //required : true,
            //relationTo : "product_files",
            //hasMany : false //each blood has one blood file format 
        //},
        {
            //Admin verification of the donor blood status
            name : "approvedForDonation",
            label : "blood status",
            type : "select",
            defaultValue : "approved", //for demonstration only
            access : { //access policy
                create : ({req}) => req.user.role === 'admin',
                read : ({req}) => req.user.role === 'admin',
                update : ({req}) => req.user.role === 'admin',
            },
            options : [
                {
                    label : "Pending verification",
                    value : "pending",
                },
                {
                    label : "Approved",
                    value : "approved",
                },
                {
                    label : "Denied",
                    value : "denied"
                }
            ]
        },
        {
            //handle checkout data for donation request acceptance (allow user to accept request and send request)  
            name : "bloodID",
            access : {
                create : () => false,
                read : () => false,
                update : () => false,
            },
            type : "text",
            admin : {
                hidden : true
            }
        },
        {
            //handle checkout data for donation request acceptance (allow user to accept request and send request)  
            name : "stripeID",
            access : {
                create : () => false,
                read : () => false,
                update : () => false,
            },
            type : "text",
            admin : {
                hidden : true
            }
        }, 
        //{
            //name : "images",
            //type : "array",
            //label : "donor photo",
            //minRows : 1,
            //maxRows : 2,
            //required : false,
            //fields : [
                //{
                    //name : "image",
                    //type : "upload",
                    //relationTo : "media",
                    //required: false
                //}
            //]
        //}
    ]
}