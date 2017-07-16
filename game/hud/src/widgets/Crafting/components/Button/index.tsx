/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * @Author: Mehuge (mehuge@sorcerer.co.uk)
 * @Date: 2017-05-23 21:18:49
 * @Last Modified by: Andrew Jackson (jacksonal300@gmail.com)
 * @Last Modified time: 2017-07-18 12:46:04
 */


import * as React from 'react';
import { StyleSheet, css, merge, button, ButtonStyles } from '../../styles';

interface ButtonProps {
  disabled?: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  style?: Partial<ButtonStyles>;
  children?: any;
}

export const Button = (props: ButtonProps) => {
  const ss = StyleSheet.create(merge({}, button, props.style));
  return (
    <button disabled={props.disabled} className={css(ss.button)} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
