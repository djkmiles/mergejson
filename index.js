#!/usr/bin/env node

const fs = require('fs')
const program = require('commander')
const _ = require('lodash')

program
	.arguments('<downstream> <upstream> <selector>', { isDefault: true })
	.action(function (downstream, upstream, selector) {
		let ds = _.get(JSON.parse(fs.readFileSync(downstream).toString()), selector)
		let target = JSON.parse(fs.readFileSync(upstream).toString())
		let us = _.get(target, selector)
		console.log(_.set(target, selector, _.defaults(us, ds)))
	})
	.parse(process.argv)
