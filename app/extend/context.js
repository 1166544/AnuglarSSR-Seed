module.exports = {

    /**
     * 渲染片断
     * @param {*} paramsData 页面数据
     */
    async renderSSR(paramsData) {
        let pageData = paramsData;

        if (!paramsData) {
            pageData = {};
        }
        pageData.url = this.url;

        this.body = await this.app.getRenderTemplateData(pageData);
    }

};
