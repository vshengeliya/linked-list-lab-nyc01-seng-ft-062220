function getName(node){
    return node.name
}

function headNode(head, collection) {
    return collection[head];
}
 
function next(node, collection){
    let nextAddress = node.next
  return collection[nextAddress]
}

function nodeAt(index, head, collection){

    return collection[head[index]]
}

function indexAt(node, collection, head){

    let currentNode = headNote(head, collection);
    let currentIndex = 0;
    
    while(currentNode !=node){ 
    currentIndex ++;
    currentNode = next(currentNode, collection);
       }
  return currentIndex;
  }
