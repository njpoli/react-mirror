import React from 'react'
import '../App.css'
import '../roboto.css'
import { fetchNews, saveIntervals } from '../actions'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { config } from "../config";

class News extends React.Component {

  state = {
    randomNewsTopic : {}
  }

  componentDidUpdate = (prevProps) => {
    if (prevProps.news !== this.props.news) {
      this.setState({randomNewsTopic : this.props.news[Math.floor(Math.random() * this.props.news.length)]})
    }
  }

  componentDidMount = () => {
    this.getNews();
    const self = this
    const checkInterval = this.props.saved_intervals.filter((item) => item.name === self.props.current_user.name && item.widget === 'News')
    if (checkInterval.length === 0)
    {
      this.setInterval = setInterval(() => this.setState({randomNewsTopic : this.props.news[Math.floor(Math.random() * this.props.news.length)]}), 20 * 1000)
      this.props.saveIntervals([...this.props.saved_intervals, {name: this.props.current_user.name, widget: 'News'}])
    }
  }

  componentWillUnmount = () => {
    clearInterval(this.interval);
  }

  getNews = () => {
    const params = {
      apiKey : config.NEWS_API_KEY,
      sources: "google-news"
    }
    return this.props.fetchNews(params);
  }

  render = () =>
  {
    return (
      <div className={this.props.location}>
        <span className="bold small bright">News</span>
        <br />
        <span className="bold small bright">{this.state.randomNewsTopic ? this.state.randomNewsTopic.title : 'loading'}</span>
      </div>
  )}
}

const mapStateToProps = (state) => {
  return {
    news: state.news,
    saved_intervals : state.saved_intervals
  }
}

const mapDispatchToProps = (dispatch) =>  {
  return bindActionCreators(
    { fetchNews, saveIntervals },
    dispatch
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(News);