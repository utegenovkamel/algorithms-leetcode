const tree = [
    {
        value: 5,
        children: [
            {
                value:10,
                children: [
                    {
                        value:11,
                    }
                ]
            },
            {
                value:7,
                children: [
                    {
                        value:5,
                        children: [
                            {
                                value:1
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        value: 5,
        children: [
            {
                value:10
            },
            {
                value:15
            }
        ]
    }
]

const recursive = (tree) => {
    let sum = 0;
    tree.forEach(node => {
        sum += node.v
        if(!node.c) {
            return node.v
        }
        sum += recursive(node.c)
    })
    return sum
}


const iteration = (tree) => {
    let sum = 0
    const stack = []
    tree.forEach(node => {
        sum += node.v
        stack.push(...node.c)
    })

    while(stack.length) {
        const currentNode = stack.pop()
        sum += currentNode.v
        if(currentNode.c){
            stack.push(...currentNode.c)
        }
    }

    return sum
}
const recursive2 = (tree) => {
    let sum = 0

    tree.forEach(item => {
        sum += item.v

        if(item.c) {
            sum += recursive2(item.c)
        }
    })

    return sum
}

const iteration2 = (tree) => {
    let sum = 0
    const stack = []

    tree.forEach(item => {
        sum += item.v
        stack.push(...item.c)
    })

    while(stack.length) {
        const current = stack.pop()
        sum += current.v

        if(current.c) {
            stack.push(...current.c)
        }
    }

    return sum
}

console.log(iteration2(tree))

