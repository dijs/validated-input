[![NPM Version](https://img.shields.io/npm/v/validated-input.svg)](https://www.npmjs.com/package/validated-input)
[![Build Status](https://travis-ci.org/dijs/validated-input.svg)](https://travis-ci.org/dijs/validated-input)
[![Coverage Status](https://coveralls.io/repos/dijs/validated-input/badge.svg)](https://coveralls.io/r/dijs/validated-input)
[![paypal](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=richard%2evanderdys%40gmail%2ecom&lc=US&item_name=ValidatedInput&currency_code=USD&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted)

# ValidatedInput

A React Component which makes input validation really easy.

## Install

```bash
npm install --save validated-input
```

[![validated-input](https://nodei.co/npm/validated-input.png)](https://npmjs.org/package/validated-input)

## Usage

All props are mapped to an input, so just treat the component like a regular input element.

You will need to tell the component how to `validate` the given value. To make this easy, we have
proxied all the validation methods from the amazing [validator](https://www.npmjs.com/package/validator) module.

Here is a couple examples:

````js
import React from 'react';
import ValidatedInput from 'validated-input';

export default function FormExample({ phone, updatePhone, email, updateEmail }) {
  return <div className="form">
    <ValidatedInput
      validate={v => v.isMobilePhone('en-US')}
      type="tel"
      placeholder="Phone Number"
      value={phone}
      onChange={e => updatePhone(e.target.value)}
    />
    <ValidatedInput
      validate={v => v.isEmail()}
      type="email"
      placeholder="Email Address"
      value={email}
      onChange={e => updateEmail(e.target.value)}
      required
    />
  </div>
};
`````

## Props for `ValidatedInput`

All other props are automatically mapped to the inner input element.

| Name         | Type    | Default | Description |
| ------------ | ------- | ------- | ----------- |
| validate | Function | `validator => true` | A function to validate the current value |
| containerClassName | String | `validation-container` | class of input container div |
| errorClassName | String | `error` | class for error |
