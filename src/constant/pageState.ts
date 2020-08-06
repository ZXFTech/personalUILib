export const titleBarContent = {

}

export const navBarContent = [
  {
    navName:'Home',
    navText:'首页',
    navUrl:'/home',
  },
  {
    navName:'Category',
    navText:'分类',
    navUrl:'/category',
    subNav:[
      {
        navName:'ByTag',
        navText:'按标签',
        navUrl:'/tags'
      },
      {
        navName:'BySeries',
        navText:'按系列',
        navUrl:'/series'
      },
      {
        navName:'ByDate',
        navText:'按日期',
        navUrl:'/date'
      }
    ]
  },
  {
    navName:'About',
    navText:'关于',
    navUrl:'/about'
  }
]