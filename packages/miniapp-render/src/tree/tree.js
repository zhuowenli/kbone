import QuerySelector from './query-selector'

// Traverse the dom tree to collect a list of nodes corresponding to the class and label
function walkDomTree(node, cache) {
    const tagMap = cache.tagMap = cache.tagMap || {}
    const classMap = cache.classMap = cache.classMap || {}
    const {tagName, classList} = node

    tagMap[tagName] = tagMap[tagName] || []
    tagMap[tagName].push(node)

    for (const className of classList) {
        classMap[className] = classMap[className] || []
        classMap[className].push(node)
    }

    const children = node.children || []

    for (const child of children) {
        walkDomTree(child, cache)
    }
}

class Tree {
    constructor(pageId, root, nodeIdMap, document) {
        this.pageId = pageId
        this.root = document.$$createElement(root, this)
        this.nodeIdMap = nodeIdMap
        this.idMap = {}
        this.document = document

        this.querySelector = new QuerySelector()
        if (nodeIdMap) nodeIdMap[root.nodeId] = this.root

        this.walk(root, this.root)
    }

    /**
     * 遍历 ast
     */
    walk(ast, parentNode) {
        const children = ast.children
        const idMap = this.idMap
        const nodeIdMap = this.nodeIdMap
        const document = this.document

        if (!children || !children.length) return

        // 遍历子节点
        for (const child of children) {
            let childNode

            if (child.type === 'element') {
                childNode = document.$$createElement(child, this)
            } else if (child.type === 'text') {
                childNode = document.$$createTextNode(child, this)
            }

            // 处理 id 缓存
            const id = childNode.id
            if (id && !idMap[id]) {
                idMap[id] = childNode
            }

            // 处理 nodeId 缓存
            if (nodeIdMap) nodeIdMap[child.nodeId] = childNode

            // 插入子节点
            parentNode.appendChild(childNode)

            // 遍历子节点的 ast
            this.walk(child, childNode)
        }
    }

    /**
     * 更新 idMap
     */
    updateIdMap(id, node) {
        this.idMap[id] = node
    }

    /**
     * 根据 id 获取节点
     */
    getById(id) {
        return this.idMap[id]
    }

    /**
     * 根据标签名获取节点列表
     */
    getByTagName(tagName, node) {
        const cache = {}
        walkDomTree(node || this.root, cache)

        return cache.tagMap[tagName.toUpperCase()] || []
    }

    /**
     * 根据类名获取节点列表
     */
    getByClassName(className, node) {
        const cache = {}
        walkDomTree(node || this.root, cache)

        return cache.classMap[className] || []
    }

    /**
     * 查询符合条件的节点
     */
    query(selector, node) {
        const cache = {}
        walkDomTree(node || this.root, cache)

        return this.querySelector.exec(selector, {
            idMap: this.idMap,
            tagMap: cache.tagMap,
            classMap: cache.classMap,
        })
    }
}

export default Tree
