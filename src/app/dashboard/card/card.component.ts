import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { CardService } from 'src/app/card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() card;

  constructor(private httpClient: HttpClient, public cardService: CardService) {}

  ngOnInit() {
  }

  onLike(card: any){
    // TODO: incrementar o like, salvar via rest
    card.likes++;

    this.cardService.updateCard(card).subscribe((item) => {
      this.httpClient.get('/api/skills').subscribe((ret: Array<any>) => {
        console.log(ret); //Amostra de que os likes foram atualizados na API
      });
    });
  }

  onShare(card: any){
    // TODO: abrir o link do seu linkedin
    window.open("https://www.linkedin.com/in/mateusnbrito/", "_blank");
  }
}
