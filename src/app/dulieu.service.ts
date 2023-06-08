import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DulieuService {
  constructor(private http:HttpClient) { }

  getDuAn() { return this.http.get('http://localhost:3000/duan') }
  getOneDuAn(id:number) { return this.http.get('http://localhost:3000/duan/' + id) }
  themDuAn(duan:any) { return this.http.post('http://localhost:3000/duan', duan) }
  suaDuAn(duan:any) { return this.http.put('http://localhost:3000/duan/' + duan.id, duan) }
  xoaDuAn(id:number) { return this.http.delete('http://localhost:3000/duan/' + id) }

  getNhanVien() { return this.http.get('http://localhost:3000/nhanvien') }
  getNhanVienByID(id:number) { return this.http.get('http://localhost:3000/nhanvien/' + id) }
  themNhanVien(nv:any) { return this.http.post('http://localhost:3000/nhanvien', nv) }
  suaNhanVien(nhanvien:any) { return this.http.put('http://localhost:3000/nhanvien/' + nhanvien.id, nhanvien) }
  xoaNhanVien(id:number) { return this.http.delete('http://localhost:3000/nhanvien/' + id) }

  getTask() { return this.http.get('http://localhost:3000/task') }
  themTask(task:any) { return this.http.post('http://localhost:3000/task', task) }
  getTaskByID(id:number) { return this.http.get('http://localhost:3000/task/' + id) }
  suaTask(Task:any) { return this.http.put('http://localhost:3000/task/' + Task.id, Task) }
  xoaTask(id:number) { return this.http.delete('http://localhost:3000/task/' + id) }
}
