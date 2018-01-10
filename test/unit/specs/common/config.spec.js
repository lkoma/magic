import { expect } from 'chai';
import config from 'src/common/config';

describe('global config', () => {
    beforeEach(() => {
        const apis = {
            basePath: '/base/path',
            fullPath: { fullPath: 'http://www.a.com/full/path' },
            customPath: {
                root: 'http://www.a.com',
                path: '/custom/path'
            }
        };
        config.addApis(apis);
    });
    it('add api', () => {
        expect(config.apis.basePath).to.equal('/base/path');
        expect(config.apis.fullPath).to.equal('http://www.a.com/full/path');
        expect(config.apis.customPath).to.equal('http://www.a.com/custom/path');
    });
    it('set api root', () => {
        config.setRoot('http://www.b.com');
        expect(config.apis.basePath).to.equal('http://www.b.com/base/path');
        expect(config.apis.fullPath).to.equal('http://www.a.com/full/path');
        expect(config.apis.customPath).to.equal('http://www.a.com/custom/path');
    });
});
