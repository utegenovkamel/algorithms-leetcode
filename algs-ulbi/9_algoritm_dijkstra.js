// Поиск кратчайшего пути в графе

const graph = {}
graph.a = {b: 2, children: 1}
graph.b = {f: 7}
graph.c = {d: 5, e: 2}
graph.d = {f: 2}
graph.e = {f: 1}
graph.f = {g: 1}
graph.g = {}

function shortPath(graph, start, end) {
    const costs = {}
    const processed = []
    let neighbors = {}
    Object.keys(graph).forEach(node => {
        if (node !== start) {
            let value = graph[start][node]
            costs[node] = value || 100000000
        }
    })
    let node = findNodeLowestCost(costs, processed)
    while (node) {
        const cost = costs[node]
        neighbors = graph[node]
        Object.keys(neighbors).forEach(neighbor => {
            let newCost = cost + neighbors[neighbor]
            if (newCost < costs[neighbor]) {
                costs[neighbor] = newCost
            }
        })
        processed.push(node)
        node = findNodeLowestCost(costs, processed)
    }
    return costs
}

function findNodeLowestCost(costs, processed) {
    let lowestCost = 100000000
    let lowestNode;
    Object.keys(costs).forEach(node => {
        let cost = costs[node]
        if (cost < lowestCost && !processed.includes(node)) {
            lowestCost = cost
            lowestNode = node
        }
    })
    return lowestNode
}

function shortPath2(graph, start, end) {
    const distances = {}
    const visited = new Set()

    for (const node in graph) {
        distances[node] = node === start ? 0 : Infinity
    }

    while (!visited.has(end)) {
        let lowestDistance = Infinity
        let lowestNode = null

        for (const distancesNode in distances) {
            if (distances[distancesNode] < lowestDistance && !visited.has(distancesNode)) {
                lowestDistance = distances[distancesNode]
                lowestNode = distancesNode
            }
        }

        const neighbors = graph[lowestNode]
        for (const neighborsKey in neighbors) {
            const newCost = distances[lowestNode] + neighbors[neighborsKey]
            if (newCost < distances[neighborsKey]) {
                distances[neighborsKey] = newCost
            }
        }

        visited.add(lowestNode)
    }

    return distances
}

function shortPath3(graph, start, end) {
    const countSteps = {}
    const visited = new Set()

    for(let node in graph) {
        countSteps[node] = node === start ? 0 : Infinity
    }

    while(!visited.has(end)) {
        let lowestCost = Infinity
        let lowestNode

        for(let node in countSteps) {
            if(!visited.has(node) && countSteps[node] < lowestCost) {
                lowestNode = node
            }
        }

        const neighbors = graph[lowestNode]

        for(let neighbor in neighbors) {
            const newCost = neighbors[neighbor] + countSteps[lowestNode]
            if(newCost < countSteps[neighbor]) {
                countSteps[neighbor] = newCost
            }
        }

        visited.add(lowestNode)
    }

    return countSteps
}

console.log(shortPath3(graph, 'a', 'g'));
// { b: 2, children: 1, d: 6, e: 3, f: 4, g: 5 }