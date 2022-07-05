export const IS_MANDATORY = "isMandatory";
export const RULE_LOGIN = [
  {
    model: "username",
    label: "Username",
    rules: [{type: IS_MANDATORY}],
  },
  {
    model: "password",
    label: "Password",
    rules: [{type: IS_MANDATORY}],
  },
];

export const OPTION_SEX = [{
  key: 1,
  value: 'Wanita',
  label: ' Wanita'
  },
  {
  key: 2,
  value: 'Pria',
  label: ' Pria'
}]

export const OPTION_LEVEL_ADMIN = [{
  key: 1,
  value: 'Staff',
  label: 'Staff'
  },
  {
  key: 2,
  value: 'Admin',
  label: 'Admin'
}]

export const OPTION_IS_ACTIVE = [{
  key: 1,
  value: 'Yes',
  label: 'Yes'
  },
  {
  key: 2,
  value: 'No',
  label: 'No'
}]


export const OPTION_KATEGORI = [{
  key: 1,
  value: 'Lorem 1',
  label: 'Lorem 1'
  },
  {
  key: 2,
  value: 'Lorem 2',
  label: 'Lorem 2'
}]


export const OPTION_ADMIN = [{
  key: 1,
  value: 'Admin 1',
  label: 'Admin 1'
  },
  {
  key: 2,
  value: 'Admin 2',
  label: 'Admin 2'
}]