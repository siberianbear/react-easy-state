import React from 'react'
import { easyComp } from 'react-easy-state'
import Row from './Row'
import store from './store'

function App () {
  const { rows, run, runLots, add, update, clear, swapRows } = store

  return (
    <div className='container'>
      <div className='jumbotron'>
        <div className='row'>
          <div className='col-md-6'>
            <h1>React v15.5.4 + Easy State 3.0.1</h1>
          </div>
          <div className='col-md-6'>
            <div className='row'>
              <div className='col-sm-6 smallpad'>
                <button type='button' className='btn btn-primary btn-block' id='run' onClick={run}>Create 1,000 rows</button>
              </div>
              <div className='col-sm-6 smallpad'>
                <button type='button' className='btn btn-primary btn-block' id='runlots' onClick={runLots}>Create 10,000 rows</button>
              </div>
              <div className='col-sm-6 smallpad'>
                <button type='button' className='btn btn-primary btn-block' id='add' onClick={add}>Append 1,000 rows</button>
              </div>
              <div className='col-sm-6 smallpad'>
                <button type='button' className='btn btn-primary btn-block' id='update' onClick={update}>Update every 10th row</button>
              </div>
              <div className='col-sm-6 smallpad'>
                <button type='button' className='btn btn-primary btn-block' id='clear' onClick={clear}>Clear</button>
              </div>
              <div className='col-sm-6 smallpad'>
                <button type='button' className='btn btn-primary btn-block' id='swaprows' onClick={swapRows}>Swap Rows</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <table className='table table-hover table-striped test-data'>
        <tbody>
          {rows.map(row => <Row key={row.id} row={row} />)}
        </tbody>
      </table>
      <span className='preloadicon glyphicon glyphicon-remove' aria-hidden='true' />
    </div>
  )
}

export default easyComp(App)