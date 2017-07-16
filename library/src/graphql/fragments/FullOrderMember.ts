/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * @Author: JB (jb@codecorsair.com)
 * @Date: 2017-02-13 16:32:59
 * @Last Modified by: Andrew Jackson (jacksonal300@gmail.com)
 * @Last Modified time: 2017-06-22 15:22:04
 */
import gql from 'graphql-tag';
import {Faction, Race, Gender, Archetype} from '../..';
import PermissionInfoFragment from './PermissionInfo';
import CustomRankFragment from './CustomRank';
import { PermissionInfo, CustomRank } from '../schema';

export default gql`
fragment FullOrderMember on OrderMember {
  id
  name
  rank {
    ...CustomRank
  }
  race
  gender
  class
  joined
  lastLogin
  kills
  extraPermissions {
    ...PermissionInfo
  }
  permissions {
    ...PermissionInfo
  }
}
${CustomRankFragment}
${PermissionInfoFragment}
`;

export interface FullOrderMember {
  id : string;
  name : string;
  rank : CustomRank;
  race : Race;
  gender : Gender;
  class : Archetype;
  joined : string;
  lastLogin : string;
  kills : number;
  permissions: PermissionInfo[];
}
