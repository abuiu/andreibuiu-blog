export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e0627035a2d2837e205bf57',
                  title: 'Sanity Studio',
                  name: 'andreibuiu-blog-studio',
                  apiId: '011fa97f-d793-4ead-a2ca-eb8ddde33182'
                },
                {
                  buildHookId: '5e062703504f1d2b9403fd67',
                  title: 'Blog Website',
                  name: 'andreibuiu-blog',
                  apiId: 'e9ae9a4d-1ed8-4291-9119-1840b71e6533'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/abuiu/andreibuiu-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://andreibuiu-blog.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
