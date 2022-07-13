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
  value: 'Kategori 1',
  label: 'Kategori 1'
  },
  {
  key: 2,
  value: 'Kategori 2',
  label: 'Kategori 2'
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

export const OPTION_BANK = [{
  key: 1,
  value: 'Bank Mandiri',
  label: 'Bank Mandiri'
  },
  {
  key: 2,
  value: 'BCA',
  label: 'BCA'
  },
  {
  key: 3,
  value: 'BRI',
  label: 'BRI'
  },
  {
  key: 4,
  value: 'BNI',
  label: 'BNI'
  },
  {
  key: 5,
  value: 'Lainnya',
  label: 'Lainnya'
  }];
  
export const OPTION_PROGRAM = [{
  key: 1,
  value: 'Donasi Sarapan',
  label: 'Donasi Sarapan'
  },
  {
  key: 2,
  value: 'Donasi Bahan',
  label: 'DOnasi Bahan'
  },
  {
  key: 3,
  value: 'Donasi Uang',
  label: 'Donasi Uang'
  },
  {
  key: 4,
  value: 'Donasi Tenaga',
  label: 'Donasi Tenaga'
  },
  {
  key: 5,
  value: 'Lainnya',
  label: 'Lainnya'
  }]


export const OPTION_WA = () => {
  const data = [];
  for (let i = 0; i < 57; i++) {
  data.push({
    key: i,
    value: `08${i}09027${i}`,
    });
  }
  
  return data;
}