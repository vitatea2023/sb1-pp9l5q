import { useEffect, useRef } from 'react';
import { HotTable } from '@handsontable/react';
import { registerAllModules } from 'handsontable/registry';
import 'handsontable/dist/handsontable.full.css';
import './App.css';

registerAllModules();

function App() {
  const hotTableRef = useRef(null);

  // 定义滚轮处理函数
  const handleWheel = (e) => {
    if (e.shiftKey) {
      e.preventDefault();
      const hotElement =
        hotTableRef.current.hotInstance.rootElement.querySelector(
          '.ht_master .wtHolder'
        );
      if (hotElement) {
        const scrollAmount = e.deltaY * 2;
        hotElement.scrollLeft += scrollAmount;
      }
    }
  };

  // 使用 useEffect，在组件挂载后添加事件监听器
  useEffect(() => {
    let hotElement = null;

    // 使用 setTimeout 确保 hotInstance 已经初始化
    const timer = setTimeout(() => {
      if (hotTableRef.current && hotTableRef.current.hotInstance) {
        hotElement = hotTableRef.current.hotInstance.rootElement.querySelector(
          '.ht_master .wtHolder'
        );
        if (hotElement) {
          hotElement.addEventListener('wheel', handleWheel, { passive: false });
        }
      }
    }, 0);

    // 清理函数，组件卸载时移除事件监听器
    return () => {
      clearTimeout(timer);
      if (hotElement) {
        hotElement.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);

  const data = [
    [
      'Tesla',
      'Model S Plaid',
      2023,
      '电动',
      '特斯拉灰',
      129990,
      '美国',
      '是',
      '1020hp',
      2162,
      1.99,
      322,
      637,
      null,
    ],
    [
      'Porsche',
      'Taycan Turbo S',
      2023,
      '电动',
      '保时捷红',
      187400,
      '德国',
      '是',
      '750hp',
      2295,
      2.6,
      260,
      412,
      null,
    ],
    [
      'BMW',
      'i7 xDrive60',
      2023,
      '电动',
      '矿石白',
      119300,
      '德国',
      '是',
      '536hp',
      2640,
      4.5,
      240,
      590,
      null,
    ],
    [
      'Mercedes',
      'EQS 580 4MATIC',
      2023,
      '电动',
      '曜岩黑',
      125900,
      '德国',
      '是',
      '516hp',
      2585,
      4.1,
      210,
      770,
      null,
    ],
    [
      'Audi',
      'e-tron GT RS',
      2023,
      '电动',
      '金属蓝',
      143900,
      '德国',
      '是',
      '637hp',
      2347,
      3.1,
      250,
      472,
      null,
    ],
    [
      'Lucid',
      'Air Dream Edition',
      2023,
      '电动',
      '星云白',
      169000,
      '美国',
      '是',
      '1111hp',
      2339,
      2.5,
      270,
      830,
      null,
    ],
    [
      'Toyota',
      'Crown Hybrid Max',
      2023,
      '混动',
      '曜石黑',
      52350,
      '日本',
      '否',
      '340hp',
      1845,
      5.7,
      209,
      null,
      6.7,
    ],
    [
      'Honda',
      'Legend Hybrid',
      2023,
      '混动',
      '水晶银',
      48500,
      '日本',
      '否',
      '377hp',
      1960,
      6.0,
      210,
      null,
      7.0,
    ],
    [
      'Lexus',
      'LS 500h',
      2023,
      '混动',
      '深蓝宝石',
      111100,
      '日本',
      '是',
      '354hp',
      2265,
      5.4,
      250,
      null,
      6.6,
    ],
    [
      'Genesis',
      'G90',
      2023,
      '汽油',
      '墨玉黑',
      89000,
      '韩国',
      '是',
      '375hp',
      2185,
      5.3,
      250,
      null,
      10.1,
    ],
    [
      'Bentley',
      'Flying Spur',
      2023,
      '汽油',
      '宾利绿',
      227025,
      '英国',
      '是',
      '542hp',
      2437,
      4.0,
      333,
      null,
      14.3,
    ],
    [
      'Rolls-Royce',
      'Ghost',
      2023,
      '汽油',
      '英伦白',
      343000,
      '英国',
      '是',
      '563hp',
      2550,
      4.3,
      250,
      null,
      15.0,
    ],
    [
      'Tesla',
      'Model S Plaid',
      2023,
      '电动',
      '特斯拉灰',
      129990,
      '美国',
      '是',
      '1020hp',
      2162,
      1.99,
      322,
      637,
      null,
    ],
    [
      'Porsche',
      'Taycan Turbo S',
      2023,
      '电动',
      '保时捷红',
      187400,
      '德国',
      '是',
      '750hp',
      2295,
      2.6,
      260,
      412,
      null,
    ],
    [
      'BMW',
      'i7 xDrive60',
      2023,
      '电动',
      '矿石白',
      119300,
      '德国',
      '是',
      '536hp',
      2640,
      4.5,
      240,
      590,
      null,
    ],
    [
      'Mercedes',
      'EQS 580 4MATIC',
      2023,
      '电动',
      '曜岩黑',
      125900,
      '德国',
      '是',
      '516hp',
      2585,
      4.1,
      210,
      770,
      null,
    ],
    [
      'Audi',
      'e-tron GT RS',
      2023,
      '电动',
      '金属蓝',
      143900,
      '德国',
      '是',
      '637hp',
      2347,
      3.1,
      250,
      472,
      null,
    ],
    [
      'Lucid',
      'Air Dream Edition',
      2023,
      '电动',
      '星云白',
      169000,
      '美国',
      '是',
      '1111hp',
      2339,
      2.5,
      270,
      830,
      null,
    ],
    [
      'Toyota',
      'Crown Hybrid Max',
      2023,
      '混动',
      '曜石黑',
      52350,
      '日本',
      '否',
      '340hp',
      1845,
      5.7,
      209,
      null,
      6.7,
    ],
    [
      'Honda',
      'Legend Hybrid',
      2023,
      '混动',
      '水晶银',
      48500,
      '日本',
      '否',
      '377hp',
      1960,
      6.0,
      210,
      null,
      7.0,
    ],
    [
      'Lexus',
      'LS 500h',
      2023,
      '混动',
      '深蓝宝石',
      111100,
      '日本',
      '是',
      '354hp',
      2265,
      5.4,
      250,
      null,
      6.6,
    ],
    [
      'Genesis',
      'G90',
      2023,
      '汽油',
      '墨玉黑',
      89000,
      '韩国',
      '是',
      '375hp',
      2185,
      5.3,
      250,
      null,
      10.1,
    ],
    [
      'Bentley',
      'Flying Spur',
      2023,
      '汽油',
      '宾利绿',
      227025,
      '英国',
      '是',
      '542hp',
      2437,
      4.0,
      333,
      null,
      14.3,
    ],
    [
      'Rolls-Royce',
      'Ghost',
      2023,
      '汽油',
      '英伦白',
      343000,
      '英国',
      '是',
      '563hp',
      2550,
      4.3,
      250,
      null,
      15.0,
    ],
  ];

  const columns = [
    {
      title: '品牌',
      type: 'text',
      width: 120,
    },
    {
      title: '型号',
      type: 'text',
      width: 160,
    },
    {
      title: '年份',
      type: 'numeric',
      width: 80,
    },
    {
      title: '动力类型',
      type: 'text',
      width: 100,
    },
    {
      title: '颜色',
      type: 'text',
      width: 120,
    },
    {
      title: '价格 ($)',
      type: 'numeric',
      numericFormat: {
        pattern: '$0,0',
        culture: 'en-US',
      },
      width: 120,
    },
    {
      title: '产地',
      type: 'text',
      width: 100,
    },
    {
      title: '豪华品牌',
      type: 'text',
      width: 100,
    },
    {
      title: '最大功率',
      type: 'text',
      width: 100,
    },
    {
      title: '重量 (kg)',
      type: 'numeric',
      width: 100,
    },
    {
      title: '0-60加速 (秒)',
      type: 'numeric',
      width: 100,
    },
    {
      title: '最高速度 (km/h)',
      type: 'numeric',
      width: 120,
    },
    {
      title: '续航里程 (km)',
      type: 'numeric',
      width: 120,
    },
    {
      title: '耗油量 (L/100km)',
      type: 'numeric',
      width: 120,
    },
  ];

  const settings = {
    data,
    columns,
    colHeaders: true,
    rowHeaders: true,
    height: 600, // 增加表格高度
    width: '100%',
    licenseKey: 'non-commercial-and-evaluation',
    stretchH: 'none',
    className: 'custom-table-style',
    rowHeights: 35,
    autoColumnSize: false,
    manualColumnResize: true,
    fixedColumnsStart: 1,
    readOnly: true,
  };

  return (
    <div className="custom-table">
      <h1>豪华汽车数据表</h1>
      {/* 如果不需要提示，可以删除下面这一行 */}
      <p className="scroll-hint">提示：按住 Shift + 鼠标滚轮可以左右滚动</p>
      <div className="table-container">
        <div className="striped-table">
          {/* 传递 ref 给 HotTable */}
          <HotTable ref={hotTableRef} {...settings} />
        </div>
      </div>
    </div>
  );
}

export default App;
