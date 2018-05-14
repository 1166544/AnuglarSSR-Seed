'use strict';
const reflectMetadata = require('reflect-metadata');
const zoneNode = require('zone.js/dist/zone-node');
const platformServer = require('@angular/platform-server');
const core = require('@angular/core');
const path = require('path');
const fs = require('fs');

const TEMPLATE_DATA = Symbol('Application#templateData');
const BUNDLE_DATA = Symbol('Application#bundleData');

module.exports = {

    get templateData() {
        return this[TEMPLATE_DATA];
    },
    set templateData(value) {
        this[TEMPLATE_DATA] = value;
    },

    get bundleData() {
        return this[BUNDLE_DATA];
    },
    set bundleData(value) {
        this[BUNDLE_DATA] = value;
    },

    /**
     * 启动调用
     */
    startTemplate() {
        const filePath = path.join(this.config.baseDir, `app/${this.config.sources}/browser/index.html`);

        this.templateData = fs.readFileSync(filePath).toString();
        if (!core._runModeLocked) {
            core.enableProdMode();
        }
        this.bundleData = require(`../${this.config.sources}/server/main.bundle`);
    },

    /**
     * 异步渲染片断
     * @param {*} params 渲染参数
     */
    async getRenderTemplateData(params) {
        const opts = { document: this.templateData, url: params.url || '/' };

        return new Promise((resolve, reject) => {
            platformServer.renderModuleFactory(this.bundleData.AppServerModuleNgFactory, opts)
            .then((html) => {
                // console.log('renderHTML::::::', html);
                resolve(html);
            });
        });
    }
};
