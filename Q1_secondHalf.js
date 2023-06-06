class Node{
    constructor(data)
    {
        this.data=data;
        this.next=null;
    }
}
class List{
    constructor()
    {
        this.head=null;
        this.tail=null;
    }
}
const add=(myList,data)=>{
    let newNode=new Node(data);
    if(!myList.head)
    {
        myList.tail=newNode;
        myList.head=newNode;
    }
    else
    {
        myList.tail.next=newNode;
        myList.tail=newNode;
    }
}

const printList =(myList)=>{
    let temp=myList.head;
    while(temp)
    {
        console.log(temp.data);
        temp=temp.next;
    }
}

const removeDuplicate=(myList)=>{
    let list=myList.head;
    while(list && list.next)
    {
        let temp=list;
        let flag=false;
        
        while(list.next && list.data==list.next.data)
        {
            flag=true;
            list=list.next;
        }
        if(list.data==temp.data)
        {
            temp.next=null;
            return;
        }
        flag===true? temp.next=list:list=list.next;
    }
}
let myList=new List();
add(myList,1);
add(myList,2);
add(myList,2);
add(myList,2);
add(myList,3);
add(myList,4);
add(myList,4);
add(myList,4);
removeDuplicate(myList);

printList(myList);









