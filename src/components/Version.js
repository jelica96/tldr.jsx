//@flow

/*******************************************************************************
 * Imports
 *******************************************************************************/

import React from 'react'

/*******************************************************************************
 * Private
 *******************************************************************************/

const Version  = process.env.VERSION
const Revision = process.env.REVISION
const Origin   = `https://github.com/ostera/tldr.jsx/tree/${Revision}`

/*******************************************************************************
 * Public API
 *******************************************************************************/

export default () =>
  <a className="version" href={Origin}>v{Version}</a>