/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * @Author: Andrew Jackson (jacksonal300@gmail.com)
 * @Date: 2017-06-26 22:51:23
 * @Last Modified by: Andrew Jackson (jacksonal300@gmail.com)
 * @Last Modified time: 2017-07-18 10:23:07
 */

import * as React from 'react';

import { StyleDeclaration, StyleSheet, css } from 'aphrodite';
import { Tooltip } from 'camelot-unchained';

import { InventoryFilterButton as FilterButtonDefinition } from '../../../lib/constants';
import { prettifySlotName } from '../../../lib/utils';

export interface InventoryFilterButtonStyles extends StyleDeclaration {
  inventoryFilterButton: React.CSSProperties;
  filterIcon: React.CSSProperties;
  activeFilterIcon: React.CSSProperties;
}

export const defaultInventoryFilterButtonStyle: InventoryFilterButtonStyles = {
  inventoryFilterButton: {
    marginRight: '5px',
    marginBottom: '5px',
  },

  filterIcon: {
    color: '#b19d78',
    cursor: 'pointer',
    ':hover': {
      color: '#cfbb8f',
    },
    ':active': {
      color: '#b1fff1',
    },
  },
  
  activeFilterIcon: {
    color: '#b1fff1',
    ':hover': {
      color: '#ccfffc',
    },
  },
};

export interface InventoryFilterButtonProps {
  styles?: Partial<InventoryFilterButtonStyles>;
  
  // The filter button defintiion object
  filterButton: FilterButtonDefinition;

  // Should this button be rendered as activated by default?
  defaultActivated?: boolean;

  // Called when this button is clicked while not activated
  onActivated?: (filter: FilterButtonDefinition) => void;

  // Called when this button is clicked while activated
  onDeactivated?: (filter: FilterButtonDefinition) => void;
}

export interface InventoryFilterButtonState {
  activated: boolean;
}

export class InventoryFilterButton extends React.Component<InventoryFilterButtonProps, InventoryFilterButtonState> {

  private didMount: boolean;

  public get isActivated() {
    return this.state.activated;
  }

  public set isActivated(value: boolean) {
    if (!this.didMount) return;
    
    if (value && this.props.onActivated) {
      this.props.onActivated(this.props.filterButton);
    }
    
    if (value === false && this.props.onDeactivated) {
      this.props.onDeactivated(this.props.filterButton);
    }
    
    this.setState({activated: value});
  }

  constructor(props: InventoryFilterButtonProps) {
    super(props);
    this.state = {
      activated: props.defaultActivated || false,
    };
  }

  public render() {
    const style = StyleSheet.create(defaultInventoryFilterButtonStyle);
    const customStyle = StyleSheet.create(this.props.styles || {});

    return (
      <Tooltip content={() => <div>{prettifySlotName(this.props.filterButton.name)}</div>}>
        <div className={css(style.inventoryFilterButton, customStyle.inventoryFilterButton)}>
          <div style={this.props.filterButton.style || {}}>
            <div style={{
                      width: '35px',
                      height: '35px',
                      fontSize: '35px',
                    }}
                    onClick={this.onClicked}
                    className={`${this.props.filterButton.icon}
                    ${css(style.filterIcon,
                          customStyle.filterIcon,
                          this.state.activated && style.activeFilterIcon,
                          this.state.activated && customStyle.activeFilterIcon)}`} />
          </div>
        </div>
      </Tooltip>
    );
  }

  public componentDidMount() {
    this.didMount = true;
  }

  public componentWillUnmount() {
    this.didMount = false;
  }

  private onClicked = () => {
    if (this.state.activated && this.props.onDeactivated) {
      this.props.onDeactivated(this.props.filterButton);
    }

    if (this.state.activated === false && this.props.onActivated) {
      this.props.onActivated(this.props.filterButton);
    }
    
    this.setState({ activated: !this.state.activated });
  }
}

export default InventoryFilterButton;
