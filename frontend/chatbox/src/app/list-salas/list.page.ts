import { Component, OnInit, Input } from '@angular/core';
import { GiphyService } from '../shared/giphy/giphy.service';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;
  private icons = ['assets/perfil.png'];

  public items: Array<{ title: string; note: string; icon: string }> = [];
  constructor(private giphyService: GiphyService) {
    
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });

      for(let item of this.items){
        let url = this.giphyService.get(item.title);
        url.subscribe(url => item.icon = url);
      }
    }
  }

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
