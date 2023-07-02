import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1/tab1.page';
import { Tab2Page } from './tab2/tab2.page';
import { Tab3Page } from './tab3/tab3.page';
import { Tab4Page } from './tab4/tab4.page';
import { Tab5Page } from './tab5/tab5.page';
import { Tab6Page } from './tab6/tab6.page';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'tabs',
    children: [
      {
        path: 'tab1',
        component: Tab1Page
      },
      {
        path: 'tab2',
        component: Tab2Page
      },
      {
        path: 'tab3',
        component: Tab3Page
      },  
      {
        path: 'tab4',
        component: Tab4Page
      },
      {
        path: 'tab5',
        component: Tab5Page
      },
      {
        path: 'tab6',
        component: Tab6Page
      }
    
    ]
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
