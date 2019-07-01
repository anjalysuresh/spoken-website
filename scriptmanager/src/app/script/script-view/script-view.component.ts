import { Component, OnInit, Input, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CreateScriptService } from '../../_service/create-script.service';
import { CommentsService } from '../../_service/comments.service';
import { RevisionsService } from '../../_service/revisions.service';
import { Observable, Subject } from 'rxjs';
import { DiffResults } from '../../diff';
export interface DiffContent {
  leftContent: string;
  rightContent: string;
}
@Component({
  selector: 'app-script-view',
  templateUrl: './script-view.component.html',
  styleUrls: ['./script-view.component.sass']
})

export class ScriptViewComponent implements OnInit {
  public slides: any = [];
  public tutorials: any = [];
  private id: number;
  public comment = false;
  public revision = false;
  public comments: any = [];
  public revisions: any;
  public tutorialName: any;
  public slideId: number;
  public slideIdRev: number;
  public index: number = 0;
  public index2: number = 0;
  public overVal:boolean[]=[false];
  public revision_old;
  public revision_new;

  submitted = false;
  content: DiffContent = {
    leftContent: '',
    rightContent: ''
  };
  options: any = {
    lineNumbers: true,
    mode: 'xml'
  };

  contentObservable: Subject<DiffContent> = new Subject<DiffContent>();
  contentObservable$: Observable<DiffContent> = this.contentObservable.asObservable();

  @Input() nav: any;
  @ViewChild('tableRow') el: ElementRef;
  @ViewChild('newmodal') el2: ElementRef;
  public mystyle={
    // display:hidden,
  }
  constructor(
    private route: ActivatedRoute,
    public createscriptService: CreateScriptService,
    public commentsService: CommentsService,
    public revisionsService: RevisionsService,
    private rd: Renderer2
  ) { }
  public mouseenter(i){
    this.overVal[i]=true;
  }
  public mouseleave(i){
    this.overVal[i]=false;
  }

  public viewScript() {
    this.createscriptService.getScript(
      this.id
    ).subscribe(
      (res) => {
        this.slides = res;
      },
    );
  }

  public getComment() {
    this.commentsService.getComment(
      this.slideId
    ).subscribe(
      (res) => {
        this.comments = res;
      },
    );
  }

  public postComment(comment) {
    this.commentsService.postComment(
      this.slideId,
      {
        "comment": comment
      }
    ).subscribe();
    this.getComment();
  }

  public viewComment(i) {
    this.el.nativeElement.querySelectorAll('tr')[this.index + 1].classList.remove('is-selected')
    this.index = i
    if (this.slideId != this.slides[i]['id']) {
      this.slideId = this.slides[i]['id']
      this.getComment();
      if (this.revision == true) {
        this.revision = false;
      }
      this.comment = true;
      this.el.nativeElement.querySelectorAll('tr')[i + 1].classList.add('is-selected')
    }
    else {
      if (this.comment == false) {
        if (this.revision == true) {
          this.revision = false;
        }
        this.comment = true;
        this.el.nativeElement.querySelectorAll('tr')[i + 1].classList.add('is-selected')
      }
      else {
        this.comment = false;
        this.el.nativeElement.querySelectorAll('tr')[i + 1].classList.remove('is-selected')
      }
    }
  }

  public viewModal(index) {
    this.index2 = index
    this.el2.nativeElement.classList.add('is-active')
  }

  public hideModal() {
    this.el2.nativeElement.classList.remove('is-active')
  }

  public getRevison(i) {
    this.revisionsService.getRevisions(
      i
    ).subscribe(
      (res) => {
        this.revisions = res;
        this.revision_new=res;
        console.log(this.revisions)
        if (this.revisions.length == 0) {
          this.revisions = false;
        }
      },
    );

  }

  public viewRevision(i) {
    if (this.slideIdRev != i) {
      this.slideIdRev = i
      this.getRevison(i);
      if (this.comment == true) {
        this.comment = false;
      }
      this.revision = true;
      console.log(this.revision_new);
      console.log(this.revision_old);
      console.log(this.revisions)
      this.content.leftContent = this.revision_old;
      this.content.rightContent=this.revision_new;

    }
    else {
      if (this.revision == false) {
        if (this.comment == true) {
          this.comment = false;
        }
        this.revision = true;
      }
      else {
        this.revision = false;
      }
    }
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.viewScript();
    this.tutorialName = this.route.snapshot.params['tutorialName'];

    this.content.leftContent =
    '<card xmlns="http://businesscard.org">\n' +
    '   <name>John Doe</name>\n' +
    '   <title>CEO, Widget Inc.</title>\n' +
    '   <email>john.Moe@widget.com</email>\n' +
    '   <cellphone>(202) 456-1414</cellphone>\n' +
    '   <phone>(202) 456-1414</phone>\n' +
    '   <logo url="widget.gif"/>\n' +
    ' </card>';
  this.content.rightContent =
    '<card xmlns="http://businesscard.org">\n' +
    '   <name>John Moe</name>\n' +
    '   <title>CEO, Widget Inc.</title>\n' +
    '   <email>john.Moe@widget.com</email>\n' +
    '   <phone>(202) 456-1414</phone>\n' +
    '   <address>Test</address>\n' +
    '   <logo url="widget.gif"/>\n' +
    ' </card>';
  }

  //diff on revisions
  submitComparison() {
    this.submitted = false;
    this.contentObservable.next(this.content);
    this.submitted = true;
  }

  handleChange(side: 'left' | 'right', value: string) {
    switch (side) {
      case 'left':
        this.content.leftContent = value;
        break;
      case 'right':
        this.content.rightContent = value;
        break;
      default:
        break;
    }
  }

  onCompareResults(diffResults: DiffResults) {
    console.log('diffResults', diffResults);
  }
}
