export interface Organisation {
    name: string;
    code: string;
    created_at: string;
    updated_at: string;
}

export interface Organisation_rules {
 title: string;
 image_url: string;
 created_at: string;
 updated_at: string; 
}

export interface Member {
    name: string;
    id: string;
    gender: string;
    organisation_code: string;
    function: string;
    created_at: string;
    updated_at: string;
}
export interface Activity {
    title: string;
    id: string;
    date: string;
    description: string;
    organisation_code: string;
    initiator_user_id: string;
    created_at: string;
    updated_at: string;
}
export interface News {
    id: string;
    title: string;
    endDate: string;
    description: string;
    organisation_code: string;
    initiator_user_id: string;
    created_at: string;
    updated_at: string;
}
export interface Cotisation_order {
    id: string;
    title: string;
    organisation_code: string;
    initiator_user_id: string;
    created_at: string;
    updated_at: string;
}