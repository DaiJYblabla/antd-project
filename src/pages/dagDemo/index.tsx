import React, { useState } from 'react'
/** 图核心组件 & 类型定义 */
import type { IAppLoad, NsGraph } from '@antv/xflow'
import { DagGraphExtension, XFlow, XFlowCanvas } from '@antv/xflow'
/** 图的各种扩展交互组件 */
import { CanvasMiniMap, CanvasScaleToolbar, CanvasSnapline } from '@antv/xflow'
/** 图的配置项 */
import { useGraphConfig } from './config-graph'
import { message } from 'antd'

import './index.less'
import '@antv/xflow/dist/index.css'


const Dag = () => {
  /** 画布配置 */
  const graphConfig = useGraphConfig()

  /** 画布渲染数据 */
  const [graphData, setGraphData] = useState<NsGraph.IGraphData>()

  /** XFlow初始化完成的回调 */
  const onLoad: IAppLoad = async app => {
    const nodes: NsGraph.INodeConfig[] = [
      { id: 'root1', width: 150, height: 40, renderKey: 'NODE1', info: { text: 'root1' } },
      { id: 'child1', width: 150, height: 40, renderKey: 'NODE2', info: { text: 'child1' } },
      { id: 'child2', width: 150, height: 40, renderKey: 'NODE2', info: { text: 'child2' } },
      { id: 'child3', width: 150, height: 40, renderKey: 'NODE2', info: { text: 'child3' } },
    ]

    const edges: NsGraph.IEdgeConfig[] = [
      {
        id: 'root1-child1',
        source: 'root1',
        target: 'child1',
        renderKey: 'EDGE1',
        edgeContentWidth: 60,
        edgeContentHeight: 30,
        info: { line: 'root1-child1' },
      },
      {
        id: 'root1-child2',
        source: 'root1',
        target: 'child2',
        renderKey: 'EDGE2',
        edgeContentWidth: 60,
        edgeContentHeight: 30,
        info: { line: 'root1-child2' },
      },
      {
        id: 'root1-child3',
        source: 'root1',
        target: 'child3',
        renderKey: 'EDGE1',
        edgeContentWidth: 60,
        // edgeContentHeight:30,
        info: { line: 'root1-child3' },
      }
    ]

    setGraphData({ nodes, edges })
  }

  return (
    <XFlow
      className="xflow-user-container"
      graphData={graphData}
      graphLayout={{
        layoutType: 'dagre',
        layoutOptions: {
          type: 'dagre',
          rankdir: 'TB',
          nodesep: 60,
          ranksep: 40,
        },
      }}
      onLoad={onLoad}
      isAutoCenter={true}
    >
      <XFlowCanvas config={graphConfig}>
        {/* <DagGraphExtension /> */}
        <CanvasScaleToolbar position={{ top: 12, left: 12 }} />
        <CanvasMiniMap
          miniMapClz="xflow-custom-minimap"
          nodeFillColor="#ccc"
          minimapOptions={{
            width: 200,
            height: 120,
          }}
          position={{ top: 12, right: 12 }}
        />
        {/* <CanvasSnapline color="#1890ff" /> */}
      </XFlowCanvas>
    </XFlow>
  )
}

export default Dag