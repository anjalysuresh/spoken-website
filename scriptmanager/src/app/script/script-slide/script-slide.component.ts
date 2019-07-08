import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-script-slide',
  templateUrl: './script-slide.component.html',
  styleUrls: ['./script-slide.component.sass']
})
export class ScriptSlideComponent implements OnInit {
  @Input() slide: any;
  public oldSlide: any = [];
  @Input() index: number;
  @Output() removeSlideEmitter = new EventEmitter<number>();
  @Output() saveSlideEmitter = new EventEmitter<any>();
  @Input() view: boolean = false;
  public comment = false;
  public ckEditorCue: boolean = false;
  public ckEditorNarration: boolean = false;

  editorForm: FormGroup;

  public Editor = ClassicEditor;
  public ckeditorConfig = {
    toolbar: ['heading', '|', 'bold', 'italic', 'bulletedList', 'numberedList', '|', 'undo', 'redo']
  }

  constructor() { }

  public removeSlide() {
    this.removeSlideEmitter.emit(this.index);
  }

  public checkSlide() {
    this.oldSlide.cue = this.slide.cue;
    this.oldSlide.narration = this.slide.narration;
  }

  public saveSlide() {
    if (this.oldSlide.cue != this.slide.cue) {
      this.slide.cue = this.editorForm.get('cue').value
      this.saveSlideEmitter.emit(this.slide);
    }
    else if (this.oldSlide.narration != this.slide.narration) {
      this.slide.narration = this.editorForm.get('narration').value
      this.saveSlideEmitter.emit(this.slide);
    }
    this.ckEditorCue = false;
    this.ckEditorNarration = false;
    this.checkSlide();
  }

  public changeCueToEditor() {
    this.ckEditorCue = true;
  }

  public changeNarrationToEditor() {
    this.ckEditorNarration = true;
  }

  // cueKey(event) { this.slide.cue = event.target.value;
  // console.log(event.target.value)
  // }
  // narrationKey(event) { this.slide.narration = event.target.value; }

  ngOnInit() {
    this.editorForm = new FormGroup({
      'cue': new FormControl(),
      'narration': new FormControl()
    })
    this.checkSlide()
  }

}
