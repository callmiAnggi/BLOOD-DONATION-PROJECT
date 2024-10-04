
export const PRODUCT_CATEGORIES = [
    
    //ui-case object
    {
        label : "type O",
        value : "ui_kits" as const,  //value as an internal ID to put in URL 
        Featured : [ 
            {
                name : "type O",
                href : "#",
                imageSrc : "/nav/ui-kits/mixed.jpg" //example is static in the tutorial
            },
            {
                name : "type AO",
                href : "#",
                imageSrc : "/nav/ui-kits/mixed.jpg" //example is static in the tutorial
            }
        ],
    },
    {
        label : "type B",
        value : "icons" as const,  //value as an internal ID to put in URL
        Featured : [
            {
                name : "type AB",
                href : "#",
                imageSrc : "/nav/icons/mixed.jpg" //example is static in the tutorial
            },
            {
                name : "type b",
                href : "#",
                imageSrc : "/nav/icons/mixed.jpg" //example is static in the tutorial
            }
        ],
    },
]

