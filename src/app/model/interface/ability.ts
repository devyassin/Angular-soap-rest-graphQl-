interface IAbility{
    name:string;
    url:string;
}

export interface IAbilityGlobal{
    ability:IAbility;
    is_hidden:boolean;
    slot:number;
}