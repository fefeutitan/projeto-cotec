import { ProcessoUploadService } from './../processo-upload.service';
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HttpEventType, HttpEvent } from '@angular/common/http';
import { filterResponse, uploadProgress } from 'src/app/shared/rxjs-operators';

@Component({
  selector: 'app-processo',
  templateUrl: './processo.component.html',
  styleUrls: ['./processo.component.scss'],
})
export class ProcessoComponent implements OnInit {

  files: Set<File>;
  progress = 0;

  constructor(private service: ProcessoUploadService) {}

  ngOnInit() { }

  // onChange(event) {
  //   console.log(event);

  //   const selectedFiles = <FileList>event.srcElement.files;
  //   // document.getElementById('customFileLabel').innerHTML = selectedFiles[0].name;

  //   const fileNames = [];
  //   this.files = new Set();
  //   for (let i = 0; i < selectedFiles.length; i++) {
  //     fileNames.push(selectedFiles[i].name);
  //     this.files.add(selectedFiles[i]);
  //   }
  //   document.getElementById('customFileLabel').innerHTML = fileNames.join(', ');

  //   this.progress = 0;
  // }

  // onUpload() {
  //   if (this.files && this.files.size > 0) {
  //     this.service.upload(this.files, environment.BASE_URL + '/upload')
  //       .pipe(
  //         uploadProgress(progress => {
  //           console.log(progress);
  //           this.progress = progress;
  //         }),
  //         filterResponse()
  //       )
  //       .subscribe(response => console.log('Upload Concluído'));
  //       // .subscribe((event: HttpEvent<Object>) => {
  //       //   // console.log(event);
  //       //   if (event.type === HttpEventType.Response) {
  //       //     console.log('Upload Concluído');
  //       //   } else if (event.type === HttpEventType.UploadProgress) {
  //       //     const percentDone = Math.round((event.loaded * 100) / event.total);
  //       //     // console.log('Progresso', percentDone);
  //       //     this.progress = percentDone;
  //       //   }
  //       // } );
  //   }
  // }

  // onDownloadExcel() {
  //   this.service.download(environment.BASE_URL + '/downloadExcel')
  //   .subscribe((res: any) => {
  //     this.service.handleFile(res, 'report.xlsx');
  //   });
  // }

  // onDownloadPDF() {
  //   this.service.download(environment.BASE_URL + '/downloadPDF')
  //   .subscribe((res: any) => {
  //     this.service.handleFile(res, 'report.pdf');
  //   });
  // }
}
