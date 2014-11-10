EF.Post = DS.Model.extend({
    content: DS.attr('string'),
    tags: DS.attr('raw'),
    title: DS.attr('string'),
    publishDate: DS.attr('date'),
    intro: DS.attr('string')
});