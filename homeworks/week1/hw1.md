## 1. 交作業流程

1. 寫完作業之後用`git push origin <new branch>`把用來寫作業的`new branch` push 到 GitHub
2. 接著在 GitHub 裡按`compare & pull request`（用`New pull request`也行）
3. 確認是從`new branch` merge 到 master 以及確認修改範圍
4. 留下 message（不寫也能 pull）
5. 點選`Create pull request`
6. pull 完之後複製`PR 連結`
7. 到 Lidemy 學習系統上的作業列表 `新增作業`
8. 確認交作業的週次並把`PR 連結`貼上
9. 勾選確認選項並送出

以上為交作業流程，以下為其他狀況

---

當助教改完後

## 2. 把 GitHub 上的 master pull 到 local
1. 在 local 端用`git checkout master`切換回 master
2. 用`git pull origin master`把 GitHub 的內容 pull 到 local

---

若 Huli 的 master 改動

## 3. 與 Huli 的 master 同步
1. 作業先寫完並且`commit`
2. 到 Huli 的 GitHub 課綱網頁複製 clone 用的網址
3. 在 terminal 輸入`git pull <huli's url> master`
4. 最後在`git push origin <branchname>`（因為是把 Huli 的改動 pull 到 local，所以要再 push 自己 local 的內容到自己的 repository 裡）

疑問：在4. 到底是要 push 自己的 master 還是把作業的 branch？
Huli 在影片裡是講 push master 是不是有弄錯？