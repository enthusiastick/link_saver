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

  describe('visiting the pokemon homepage', () => {
    beforeEach(() => {
      wrapper = mount(
        <IndexContainer />
      );
    });

    it('has pokemon and their information', done => {
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
