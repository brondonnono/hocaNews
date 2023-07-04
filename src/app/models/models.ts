export interface Organisation {
    code: string;
    name: string;
    created_at: string;
    updated_at: string;
}

export interface Organisation_rules {
    id: string;
    title: string;
    image_url: string;
    created_at: string;
    updated_at: string; 
}

export interface Member {
    id: string;
    userId: string;
    name: string;
    gender: string;
    organisation_code: string;
    function: string;
    created_at: string;
    updated_at: string;
}

export interface Activity {
    id: string;
    title: string;
    date: string;
    timeStart: string;
    timeEnd: string;
    location: string;
    description: string;
    organisation_code: string;
    initiator_user_id: string;
    created_at: string;
    updated_at: string;
}

export interface Program {
    id: string;
    date: string;
    listActivities: Activity[];
    created_at: string;
    updated_at: string;
}

export interface News {
    id: string;
    title: string;
    img: string;
    endDate: string;
    description: string;
    organisation_code: string;
    initiator_user_id: string;
    created_at: string;
    updated_at: string;
}

export interface Cotisation {
    id: string;
    title: string;
    member_orders: string[];
    organisation_code: string;
    currentPosition: number;
    initiator_user_id: string;
    created_at: string;
    updated_at: string;
}
