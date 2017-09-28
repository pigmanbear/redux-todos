import reducer from './todo'
import reducers from '../reducers/todo'

describe('Todo Reducer', () => {
    test('returns a state object', () => {
        const result = reducer(undefined, {type: 'ANYTHING'})
        expect(result).toBeDefined()
    })

    test('adds a todo', () => {
        const startState = {
            todos: [
                {
                    id: 1,
                    name: 'Create a Static UI',
                    isComplete: true
                }, {
                    id: 2,
                    name: 'Create Initial State',
                    isComplete: false
                }, {
                    id: 3,
                    name: 'Use State to Render UI',
                    isComplete: false
                }
            ]
        }
        const expectedState = {
            todos: [
                {
                    id: 1,
                    name: 'Create a Static UI',
                    isComplete: true
                }, {
                    id: 2,
                    name: 'Create Initial State',
                    isComplete: false
                }, {
                    id: 3,
                    name: 'Use State to Render UI',
                    isComplete: false
                }, {
                    id: 4,
                    name: 'Added todo',
                    isComplete: false
                }

            ]
        }
        const action = {
            type: 'TODO_ADD',
            payload: {
                id: 4,
                name: 'Added todo',
                isComplete: false
            }
        }
        const result = reducer(startState, action)
        expect(result).toEqual(expectedState)
    })

    test('reducers', () => {
        let state;
        state = reducers({
            todos: [],
            currentTodo: ''
        }, {
            type: 'LOAD_TODOS',
            payload: [
                {
                    id: 95,
                    name: 'Miche vi nar bintim wizezu.',
                    isComplete: false
                }, {
                    id: 114,
                    name: 'Segzumip dam sosuno wi onaki.',
                    isComplete: true
                }, {
                    id: 66,
                    name: 'Bipob tuwasop namlufso badciwmo diilu.',
                    isComplete: true
                }, {
                    id: 8,
                    name: 'Jif majuz iha vaonuuf cohoc.',
                    isComplete: true
                }, {
                    id: 36,
                    name: 'Kilelvok kiwacu mopomdi unbusfe cesjih.',
                    isComplete: false
                }, {
                    id: 4,
                    name: 'Gawon pokin ev dabku wapit.',
                    isComplete: false
                }, {
                    id: 146,
                    name: 'Tecna macmogo ug supzu mub.',
                    isComplete: true
                }, {
                    id: 80,
                    name: 'Zetiop mov wotiw jezgi awi.',
                    isComplete: false
                }, {
                    id: 89,
                    name: 'Umautaw acufoj tuscin sujcu reknu.',
                    isComplete: true
                }, {
                    id: 106,
                    name: 'Kenukoj kuic zi afhehiz liib.',
                    isComplete: false
                }, {
                    id: 44,
                    name: 'Lab suhupa lim homipleh ewi.',
                    isComplete: true
                }, {
                    id: 18,
                    name: 'Ruwhabo votuje he vaatla det.',
                    isComplete: false
                }, {
                    id: 57,
                    name: 'En wa kiteredof mi cagufaba.',
                    isComplete: false
                }, {
                    id: 96,
                    name: 'Ipo zuldus wojpo toder hed.',
                    isComplete: false
                }, {
                    id: 90,
                    name: 'Dalged ociuries bum valof awahaditu.',
                    isComplete: false
                }, {
                    id: 55,
                    name: 'Zeb ceceni vugvedaz eksi piga.',
                    isComplete: true
                }, {
                    id: 61,
                    name: 'Ocotuj bu naomikel her ra.',
                    isComplete: true
                }, {
                    id: 25,
                    name: 'Utgebfaw jirorduw roz ka bolin.',
                    isComplete: true
                }, {
                    id: 7,
                    name: 'Afo buub izeba zicebo few.',
                    isComplete: false
                }, {
                    id: 133,
                    name: 'Lujudasu kona pewim burluk si.',
                    isComplete: false
                }, {
                    name: 'A new todo',
                    isComplete: false,
                    id: 147
                }, {
                    name: 'a enw todo',
                    isComplete: false,
                    id: 148
                }, {
                    name: 'Another todo',
                    isComplete: false,
                    id: 149
                }, {
                    name: 'new o',
                    isComplete: false,
                    id: 150
                }, {
                    name: 'new o',
                    isComplete: false,
                    id: 151
                }, {
                    name: 'new o',
                    isComplete: false,
                    id: 152
                }, {
                    name: 'sss',
                    isComplete: false,
                    id: 153
                }, {
                    name: 'pope',
                    isComplete: false,
                    id: 154
                }, {
                    name: '2',
                    isComplete: false,
                    id: 155
                }, {
                    name: '0',
                    isComplete: false,
                    id: 156
                }, {
                    name: '2',
                    isComplete: false,
                    id: 157
                }, {
                    name: 'A new todo',
                    isComplete: false,
                    id: 158
                }
            ]
        });
        expect(state).toEqual({
            todos: [
                {
                    id: 95,
                    name: 'Miche vi nar bintim wizezu.',
                    isComplete: false
                }, {
                    id: 114,
                    name: 'Segzumip dam sosuno wi onaki.',
                    isComplete: true
                }, {
                    id: 66,
                    name: 'Bipob tuwasop namlufso badciwmo diilu.',
                    isComplete: true
                }, {
                    id: 8,
                    name: 'Jif majuz iha vaonuuf cohoc.',
                    isComplete: true
                }, {
                    id: 36,
                    name: 'Kilelvok kiwacu mopomdi unbusfe cesjih.',
                    isComplete: false
                }, {
                    id: 4,
                    name: 'Gawon pokin ev dabku wapit.',
                    isComplete: false
                }, {
                    id: 146,
                    name: 'Tecna macmogo ug supzu mub.',
                    isComplete: true
                }, {
                    id: 80,
                    name: 'Zetiop mov wotiw jezgi awi.',
                    isComplete: false
                }, {
                    id: 89,
                    name: 'Umautaw acufoj tuscin sujcu reknu.',
                    isComplete: true
                }, {
                    id: 106,
                    name: 'Kenukoj kuic zi afhehiz liib.',
                    isComplete: false
                }, {
                    id: 44,
                    name: 'Lab suhupa lim homipleh ewi.',
                    isComplete: true
                }, {
                    id: 18,
                    name: 'Ruwhabo votuje he vaatla det.',
                    isComplete: false
                }, {
                    id: 57,
                    name: 'En wa kiteredof mi cagufaba.',
                    isComplete: false
                }, {
                    id: 96,
                    name: 'Ipo zuldus wojpo toder hed.',
                    isComplete: false
                }, {
                    id: 90,
                    name: 'Dalged ociuries bum valof awahaditu.',
                    isComplete: false
                }, {
                    id: 55,
                    name: 'Zeb ceceni vugvedaz eksi piga.',
                    isComplete: true
                }, {
                    id: 61,
                    name: 'Ocotuj bu naomikel her ra.',
                    isComplete: true
                }, {
                    id: 25,
                    name: 'Utgebfaw jirorduw roz ka bolin.',
                    isComplete: true
                }, {
                    id: 7,
                    name: 'Afo buub izeba zicebo few.',
                    isComplete: false
                }, {
                    id: 133,
                    name: 'Lujudasu kona pewim burluk si.',
                    isComplete: false
                }, {
                    name: 'A new todo',
                    isComplete: false,
                    id: 147
                }, {
                    name: 'a enw todo',
                    isComplete: false,
                    id: 148
                }, {
                    name: 'Another todo',
                    isComplete: false,
                    id: 149
                }, {
                    name: 'new o',
                    isComplete: false,
                    id: 150
                }, {
                    name: 'new o',
                    isComplete: false,
                    id: 151
                }, {
                    name: 'new o',
                    isComplete: false,
                    id: 152
                }, {
                    name: 'sss',
                    isComplete: false,
                    id: 153
                }, {
                    name: 'pope',
                    isComplete: false,
                    id: 154
                }, {
                    name: '2',
                    isComplete: false,
                    id: 155
                }, {
                    name: '0',
                    isComplete: false,
                    id: 156
                }, {
                    name: '2',
                    isComplete: false,
                    id: 157
                }, {
                    name: 'A new todo',
                    isComplete: false,
                    id: 158
                }
            ],
            currentTodo: ''
        });
    });
})