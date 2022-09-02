import {expect, test} from '@oclif/test'

import {fancy} from'fancy-test';


describe('humans', () => {
  test
  .stdout()
  .command(['humans', '-f', 'roy'])
  .it('should be empty', ctx => {
    expect(ctx.stdout).to.be.empty;
  });
});

//   // test
//   // .stdout()
//   // .command(['humans', '--name', 'jeff'])
//   // .it('runs hello --name jeff', ctx => {
//   //   expect(ctx.stdout).to.contain('hello jeff')
//   // })
// })

// describe('nock tests', () => {
//   fancy
//   .nock('https://api.github.com', api => api
//     .get('/me')
//     .reply(200, {name: 'jdxcode'})
//   )
//   .it('mocks http call to github', async () => {
//     const {body: user} = await http.get('https://api.github.com/me')
//     expect(user).to.have.property('name', 'jdxcode')
//   })
// })
