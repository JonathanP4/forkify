import View from "./view.js";
import icons from '../../img/icons.svg';
import previewView from "./previewView.js";


class ResultsView extends View {
  _parentEl = document.querySelector('.results')
  _message = ''
  _errorMessage = 'No recipes found for your query. Please try again ;)'

  _generateMarkup() {
    console.log(this._data);
    return this._data.map(bookmark => previewView.render(bookmark, false)).join('')
  }
}

export default new ResultsView()