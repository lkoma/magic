import { expect } from 'chai';
import detect from 'common/bridge/detect';

describe('bridge/detect', () => {
    describe('container detector', () => {
        it('should parse app info', () => {
            const { container } = detect(`${Math.random().toString(16)}hybrid-1.1.0-c`);
            expect(container.type).to.equal('hybrid');
            expect(container.version).to.equal('1.1.0');
            expect(container.app).to.equal('c');
        });
        it('should parse app info when missing app name', () => {
            const { container } = detect(`${Math.random().toString(16)}hybrid-1.1.0`);
            expect(container.type).to.equal('hybrid');
            expect(container.version).to.equal('1.1.0');
            expect(container.app).to.not.exist;
        });
        it('should parse correctly in browser', () => {
            const { container } = detect(`${Math.random().toString(16)}`);
            expect(container.type).to.equal('h5');
            expect(container.version).to.to.not.exist;
            expect(container.app).to.not.exist;
        });
    });
});
