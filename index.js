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
		process.stdout.write(JSON.stringify(_.set(target, selector, _.defaults(us, ds)), null, '\t'))
	})
	.parse(process.argv)
