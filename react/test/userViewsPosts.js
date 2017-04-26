import IndexContainer from '../src/containers/IndexContainer';
import Posts from '../src/components/Posts';

describe('Posts Index', () => {
  let wrapper;

  beforeEach(() => {
    spyOn(global, 'fetch').and.returnValue(
      createResponseFromFixture('posts/index')
    );
  });

  afterEach(() => {
    wrapper.unmount();
  });

  describe('visiting the post index', () => {
    beforeEach(() => {
      wrapper = mount(
        <IndexContainer />
      );
    });

    it('has links labeled by their summary', done => {
      setTimeout(() => {
        let pageText = wrapper.text();
        expect(pageText).toMatch('facebook');
        expect(pageText).toMatch('reddit');
        expect(pageText).toMatch('tumblr');
        done();
      },0)
    });
  });
});
