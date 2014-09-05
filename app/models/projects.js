EF.Project = DS.Model.extend({
    name: DS.attr('string'),
    content: DS.attr('string'),
    fromDate: DS.attr('date'),
    toDate: DS.attr('date'),
    intro: DS.attr('string'),
    sortIndex: DS.attr('number'),
    cover: DS.attr('string'),
    largeImg: DS.attr('string')
});