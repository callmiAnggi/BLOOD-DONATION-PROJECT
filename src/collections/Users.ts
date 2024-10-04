import { CollectionConfig } from "payload/types";

export const Users: CollectionConfig = {
    slug: "users",
    auth: true,
    //ONLY THE RIGHT PEOPLE CAN SEE THE RIGHT DATA
    access: {
        read : () => true,
        create: () => true, 
    },
    fields: [
        {
            name: 'role',
            defaultValue: 'user',
            required: true,
            type: 'select',
            options: [
                {
                    label: 'Admin',
                    value: 'admin',
                },
                {
                    label: 'User', 
                    value: 'user',
                }
            ]
        }
    ]
}