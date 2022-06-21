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