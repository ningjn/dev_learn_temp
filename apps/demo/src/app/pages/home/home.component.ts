import { Component, Pipe, PipeTransform } from '@angular/core';

export class ColumnConfig {
  dataField: string; //数据字段名称
  dataType?: string; //数据类型
  caption?: string; //标题
  headerCellTemplate?: string; //表头模板
}

interface IndicateObject {
  value?: number | string; //指标值
  index?: number; //索引
  name?: string; //名称，指标标识
}

interface RowInfo {
  indexName: IndicateObject; //索引key
  [key: string]: IndicateObject; //指标id：指标值
}

const headers: ColumnConfig[] = [
  {
    dataField: 'indexName',
    caption: '地市',
    dataType: 'string',
  },
  {
    dataField: 'value_01',
    caption: '指标1',
    dataType: 'string',
  },
  {
    dataField: 'value_02',
    caption: '指标2',
    dataType: 'string',
  },
  {
    dataField: 'value_03',
    caption: '指标3',
    dataType: 'string',
  },
];

const debugData: RowInfo[] = [
  {
    indexName: { value: '济南', index: 1 },
    value_01: { value: '123', index: 1 },
    value_02: { value: '456', index: 2 },
    value_03: { value: '789', index: 3 },
  },
  {
    indexName: { value: '青岛', index: 1 },
    value_01: { value: '123', index: 1 },
    value_02: { value: '456', index: 1 },
    value_03: { value: '789', index: 1 },
  },
  {
    indexName: { value: '淄博', index: 1 },
    value_01: { value: '123', index: 1 },
    value_02: { value: '456', index: 1 },
    value_03: { value: '789', index: 1 },
  },
  {
    indexName: { value: '德州', index: 1 },
    value_01: { value: '123', index: 1 },
    value_02: { value: '456', index: 1 },
    value_03: { value: '789', index: 1 },
  },
  {
    indexName: { value: '烟台', index: 1 },
    value_01: { value: '123', index: 1 },
    value_02: { value: '456', index: 1 },
    value_03: { value: '789', index: 1 },
  },
  {
    indexName: { value: '潍坊', index: 1 },
    value_01: { value: '123', index: 1 },
    value_02: { value: '456', index: 1 },
    value_03: { value: '789', index: 1 },
  },
  {
    indexName: { value: '济宁', index: 1 },
    value_01: { value: '123', index: 1 },
    value_02: { value: '456', index: 1 },
    value_03: { value: '789', index: 1 },
  },
  {
    indexName: { value: '泰安', index: 1 },
    value_01: { value: '123', index: 1 },
    value_02: { value: '456', index: 1 },
    value_03: { value: '789', index: 1 },
  },
  {
    indexName: { value: '临沂', index: 1 },
    value_01: { value: '123', index: 1 },
    value_02: { value: '456', index: 1 },
    value_03: { value: '789', index: 1 },
  },
  {
    indexName: { value: '济南', index: 1 },
    value_01: { value: '123', index: 1 },
    value_02: { value: '456', index: 1 },
    value_03: { value: '789', index: 1 },
  },
  {
    indexName: { value: '青岛', index: 1 },
    value_01: { value: '123', index: 1 },
    value_02: { value: '456', index: 1 },
    value_03: { value: '789', index: 1 },
  },
  {
    indexName: { value: '淄博', index: 1 },
    value_01: { value: '123', index: 1 },
    value_02: { value: '456', index: 1 },
    value_03: { value: '789', index: 1 },
  },
  {
    indexName: { value: '德州', index: 1 },
    value_01: { value: '123', index: 1 },
    value_02: { value: '456', index: 1 },
    value_03: { value: '789', index: 1 },
  },
  {
    indexName: { value: '烟台', index: 1 },
    value_01: { value: '123', index: 1 },
    value_02: { value: '456', index: 1 },
    value_03: { value: '789', index: 1 },
  },
  {
    indexName: { value: '潍坊', index: 1 },
    value_01: { value: '123', index: 1 },
    value_02: { value: '456', index: 1 },
    value_03: { value: '789', index: 1 },
  },
  {
    indexName: { value: '济宁', index: 1 },
    value_01: { value: '123', index: 1 },
    value_02: { value: '456', index: 1 },
    value_03: { value: '789', index: 1 },
  },
  {
    indexName: { value: '泰安', index: 1 },
    value_01: { value: '123', index: 1 },
    value_02: { value: '456', index: 1 },
    value_03: { value: '789', index: 1 },
  },
  {
    indexName: { value: '临沂', index: 1 },
    value_01: { value: '123', index: 1 },
    value_02: { value: '456', index: 1 },
    value_03: { value: '789', index: 1 },
  },
];

@Pipe({ name: 'gridCellData' })
export class GridCellDataPipe implements PipeTransform {
  transform(gridData: any) {
    console.log(gridData);
    // return gridData.data[gridData.column.caption.toLowerCase()];
    return gridData;
  }
}

@Component({
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  dataSource = debugData;
  columns: ColumnConfig[] = headers;

  constructor() {}

  onRowPrepared(e: any): void {
    // console.log('_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_');
    // console.log(e);
    switch (e.rowType) {
      case 'header':
        e.rowElement.style.background = 'black';
        e.rowElement.style.height = '42px';
        break;
      case 'data':
        e.rowElement.style.background = 'black';
        e.rowElement.style.height = '50px';
        break;
      case 'totalFooter':
        e.rowElement.style.background = 'black';
        e.rowElement.style.height = '42px';
        break;
    }
  }

  /**
   * 排序
   * @param value1：A value to be compared.
   * @param value2：A value to be compared.
   * Return Value: Number Default Value: undefined
   *        < 0 : value1 goes before value2.
   *        = 0 : value1 and value2 remain unchanged relative to each other
   *        > 0 : value1 goes after value2.
   */
  sorting(value1, value2): number {
    console.log(value1, value2);
    return undefined;
  }
}
