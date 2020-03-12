/**
 * Copyright 2014-present, Webank, Inc.
 * All rights reserved.
 * Created by sines on 2018/9/18 20:22
 */
import { TextStyle, ViewProperties } from 'react-native'
import * as React from 'react'

type ItemProps = {
  value: string, // string only
  label: string,
}
declare class Item extends React.Component<ItemProps> {}

type Props = {
  data?: any[],
  textColor?: string,
  textSize?: number,
  itemStyle?: object,
  itemSpace?: number,
  onValueChange?: (value: any, index: number) => void,
  selectedValue?: any,
  selectedIndex?: number,
  indicatorStyle?: TextStyle
  visibleItemCount?: number
} & ViewProperties
export default class Picker extends React.Component<Props> {
  static Item: any
}

