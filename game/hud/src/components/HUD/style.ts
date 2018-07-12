/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import styled, { css } from 'react-emotion';

export const HUDEditorContainer = styled('div')`
  position: fixed;
  width: 200px;
  height: 400px;
  overflow-x: hidden;
  overflow-y: auto;
  color: white;
  background-color: gray;
  background: url(images/progression/progress-bg-grey.png) no-repeat;
  border: 2px solid #6e6c6c;
  box-shadow: 0 0 30px 0 #000;
  z-index: 942;
`;

export const HUDEditorTitle = styled('div')`
  padding-left: 4px;
  div.editorDragHandle {
    cursor: move;
  }
  div.resetHUDButton {
    position: absolute;
    top: 4px;
    right: 4px;
    font-size: 0.7em;
    color: #91743a;
  }
  a {
    text-decoration: none;
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
    -webkit-animation: none;
    animation: none;
    &:hover {
      color: white;
      -webkit-animation: glow 1.5s ease-in-out infinite alternate;
      animation: glow 1.5s ease-in-out infinite alternate;
    }
  }
`;

export const HUDEditorList = styled('div')`
  padding: 5px 5px;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: auto;
  border-top: 1px solid #3b3634;
  border-bottom: 1px solid #3b3634;
  background: rgba(0, 0, 0, 0.6);
  width: 190px;
  height: calc(100% - 104px);
  position: relative;
  box-shadow: 0 0 30px 0 #000;
  margin-bottom: 4px;
  font-family: 'Caudex', serif;
  font-size: .85em;
  ul {
    li {
      background: #191919;
      margin-bottom: 4px;
      margin-right: 20px;
      -webkit-transition: all 0.5s ease;
      div {
        display: inline-block;
        padding: 5px 10px;
        pointer-events: all;
      }
      div.HUDWidgetName {
        background: #191919;
        color: #93866c;
        width: 100%;
        cursor: pointer;
      }
      div.HUDWidgetNameSelected {
        background: #191919;
        background-color: #91743a;
        color: #fff;
        width: 100%;
      }
      &:hover {
        background: #191919;
        -webkit-transition: all 0.5s ease;
        div.HUDWidgetName {
          background: #93866c;
          color: #fff;
        }
      }
    }
  }
`;

export const HUDEditorToolbar = styled('div')`
  display: flex;
  align-items: center;
  margin: 0 auto;
  color: #93866c;
  a {
    color: #93866c !important;
    text-decoration: none;
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
    -webkit-animation: none;
    animation: none;
    &:hover {
      color: white;
      -webkit-animation: glow 1.5s ease-in-out infinite alternate;
      animation: glow 1.5s ease-in-out infinite alternate;
    }
  }
`;

export const HUDEditorToolbarTitle = styled('div')`
  text-align: center;
  font-size: .7em;
  color: #91743a;
`;

export const HUDEditorToolbarItem = styled('div')`
  margin: auto;
  width: 55px;
  height: 40px;
  font-size: 1.2em;
  text-align: center;
  i {
    position: relative;
  }
  div.HUDToolbarScaleText {
    position: relative;
    bottom: 0px;
    height: 0px;
    text-align: center;
    color: white;
    font-size: .5em;
    cursor: default !important;
  }
  div.HUDToolbarScaleControls {
    position: relative;
    bottom: 10px;
    left: 0px;
    width: 100%;
    height: 0px;
    div {
      display: inline-block;
      text-align: center;
      width: 33%;
      font-size: 1em;
      cursor: pointer;
    }
  }
  div.HUDToolbarDragControl {
    margin: auto;
    position: relative;
    width: 75%;
    height: 25px;
    top: 0px;
    left: 0px;
    cursor: row-resize !important;
  }
`;

export const HUDEditorTooltip = css`
  background-color: #020405;
  color: white;
  border: 1px solid #4A4A4A;
  padding: 2px 5px;
`;

